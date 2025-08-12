// class APIFeatures {
//   constructor(query, queryString) {
//     this.query = query;
//     this.queryString = queryString;
//   }

//   // 1. Filtering
//   filter() {
//     const queryObj = { ...this.queryString };
//     const excludedFields = ["page", "sort", "limit", "fields", "keyword"];
//     excludedFields.forEach((el) => delete queryObj[el]);

//     // Advanced filtering: gte, gt, lte, lt
//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

//     this.query = this.query.find(JSON.parse(queryStr));
//     return this;
//   }

//   // 2. Keyword Search (supports text index)
//   search() {
//     if (this.queryString.keyword) {
//       this.query = this.query
//         .find({
//           $text: { $search: this.queryString.keyword },
//         })
//         .select({ score: { $meta: "textScore" } })
//         .sort({ score: { $meta: "textScore" } });
//     }
//     return this;
//   }

//   // 3. Sorting
//   sort() {
//     if (this.queryString.sort) {
//       const sortBy = this.queryString.sort.split(",").join(" ");
//       this.query = this.query.sort(sortBy);
//     } else {
//       this.query = this.query.sort("-createdAt");
//     }
//     return this;
//   }

//   // 4. Field Limiting
//   limitFields() {
//     if (this.queryString.fields) {
//       const fields = this.queryString.fields.split(",").join(" ");
//       this.query = this.query.select(fields);
//     } else {
//       this.query = this.query.select("-__v");
//     }
//     return this;
//   }

//   // 5. Pagination
//   paginate() {
//     const page = parseInt(this.queryString.page, 10) || 1;
//     const limit = parseInt(this.queryString.limit, 10) || 10;
//     const skip = (page - 1) * limit;

//     this.query = this.query.skip(skip).limit(limit);
//     return this;
//   }
// }

// module.exports = APIFeatures;

//V2
// utils/apiFeatures.js
class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // Remove empty values and reserved keys before filtering
  filter() {
    const excluded = new Set([
      "page",
      "sort",
      "limit",
      "fields",
      "keyword",
      "search",
    ]);
    const cleaned = {};

    // keep only truthy values (except 0/false) and non-reserved keys
    for (const [k, v] of Object.entries(this.queryString || {})) {
      if (excluded.has(k)) continue;
      if (v === undefined || v === null) continue;
      if (typeof v === "string" && v.trim() === "") continue;
      cleaned[k] = v;
    }

    // Advanced operators support: gte, gt, lte, lt
    let str = JSON.stringify(cleaned);
    str = str.replace(/\b(gte|gt|lte|lt)\b/g, (m) => `$${m}`);

    this.query = this.query.find(JSON.parse(str));
    return this;
  }

  // Accept ?keyword= or ?search=
  search() {
    let kw = this.queryString?.keyword ?? this.queryString?.search;
    if (typeof kw === "string") kw = kw.trim();
    if (kw) {
      // Text index path
      this.query = this.query
        .find({ $text: { $search: kw } })
        .select({ score: { $meta: "textScore" } })
        .sort({ score: { $meta: "textScore" } });
    }
    return this;
  }

  sort() {
    const sortParam = this.queryString?.sort;
    if (sortParam && sortParam.trim() !== "") {
      this.query = this.query.sort(sortParam.split(",").join(" "));
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    const fields = this.queryString?.fields;
    if (fields && fields.trim() !== "") {
      this.query = this.query.select(fields.split(",").join(" "));
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    const page = parseInt(this.queryString?.page, 10) || 1;
    const limit = parseInt(this.queryString?.limit, 10) || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;

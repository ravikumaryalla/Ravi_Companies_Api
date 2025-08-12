const companyData = [
  {
    name: "Google",
    industry: "Technology",
    location: "Mountain View, CA, USA",
    description:
      "A multinational technology company specializing in Internet-related services and products.",
    foundedYear: 1998,
    employeeCount: 190000,
    revenue: 280000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    website: "https://www.google.com",
  },
  {
    name: "Microsoft",
    industry: "Technology",
    location: "Redmond, WA, USA",
    description:
      "A multinational technology corporation producing software, electronics, and computers.",
    foundedYear: 1975,
    employeeCount: 221000,
    revenue: 211000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    website: "https://www.microsoft.com",
  },
  {
    name: "Amazon",
    industry: "Retail",
    location: "Seattle, WA, USA",
    description:
      "An American multinational technology company focusing on e-commerce, cloud computing, and AI.",
    foundedYear: 1994,
    employeeCount: 1548000,
    revenue: 574000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    website: "https://www.amazon.com",
  },
  {
    name: "Tesla",
    industry: "Manufacturing",
    location: "Austin, TX, USA",
    description:
      "Designs, manufactures, and sells electric vehicles and clean energy products.",
    foundedYear: 2003,
    employeeCount: 140473,
    revenue: 96400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    website: "https://www.tesla.com",
  },
  {
    name: "Netflix",
    industry: "Entertainment",
    location: "Los Gatos, CA, USA",
    description:
      "A subscription-based streaming service offering TV series, films, and documentaries.",
    foundedYear: 1997,
    employeeCount: 13000,
    revenue: 33300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    website: "https://www.netflix.com",
  },
  {
    name: "Coca-Cola",
    industry: "Manufacturing",
    location: "Atlanta, GA, USA",
    description:
      "A multinational beverage corporation best known for its flagship product Coca-Cola.",
    foundedYear: 1892,
    employeeCount: 79000,
    revenue: 46000000000,
    isHiring: false,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
    website: "https://www.coca-cola.com",
  },
  {
    name: "Meta",
    industry: "Technology",
    location: "Menlo Park, CA, USA",
    description:
      "Parent company of Facebook, Instagram, and WhatsApp, focusing on social networking and VR.",
    foundedYear: 2004,
    employeeCount: 67000,
    revenue: 134900000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    website: "https://www.meta.com",
  },
  {
    name: "Apple",
    industry: "Technology",
    location: "Cupertino, CA, USA",
    description:
      "Designs, manufactures, and markets smartphones, personal computers, and electronics.",
    foundedYear: 1976,
    employeeCount: 164000,
    revenue: 383000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    website: "https://www.apple.com",
  },
  {
    name: "IBM",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
  {
    name: "Pfizer",
    industry: "Healthcare",
    location: "New York City, NY, USA",
    description:
      "A multinational pharmaceutical and biotechnology corporation.",
    foundedYear: 1849,
    employeeCount: 83000,
    revenue: 81400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pfizer_logo.svg",
    website: "https://www.pfizer.com",
  },
  {
    name: "Samsung",
    industry: "Technology",
    location: "Suwon, South Korea",
    description:
      "A multinational conglomerate known for electronics, appliances, and semiconductors.",
    foundedYear: 1938,
    employeeCount: 266000,
    revenue: 244000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    website: "https://www.samsung.com",
  },
  {
    name: "Toyota",
    industry: "Manufacturing",
    location: "Toyota City, Japan",
    description:
      "A leading automobile manufacturer producing cars, trucks, and hybrids.",
    foundedYear: 1937,
    employeeCount: 366283,
    revenue: 275400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    website: "https://www.toyota.com",
  },
  {
    name: "Walmart",
    industry: "Retail",
    location: "Bentonville, AR, USA",
    description:
      "The world's largest retailer by revenue, operating discount department stores and grocery stores.",
    foundedYear: 1962,
    employeeCount: 2300000,
    revenue: 611000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
    website: "https://www.walmart.com",
  },
  {
    name: "Nike",
    industry: "Retail",
    location: "Beaverton, OR, USA",
    description:
      "A multinational corporation engaged in the design, development, and manufacturing of footwear and apparel.",
    foundedYear: 1964,
    employeeCount: 79400,
    revenue: 51800000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    website: "https://www.nike.com",
  },
  {
    name: "Intel",
    industry: "Technology",
    location: "Santa Clara, CA, USA",
    description:
      "A multinational corporation and technology company, the world's largest semiconductor chip manufacturer.",
    foundedYear: 1968,
    employeeCount: 131900,
    revenue: 54300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    website: "https://www.intel.com",
  },
  {
    name: "Tesla Division 16",
    industry: "Manufacturing",
    location: "Austin, TX, USA",
    description:
      "Designs, manufactures, and sells electric vehicles and clean energy products.",
    foundedYear: 2003,
    employeeCount: 140473,
    revenue: 96400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    website: "https://www.tesla.com",
  },
  {
    name: "Tesla Division 17",
    industry: "Manufacturing",
    location: "Austin, TX, USA",
    description:
      "Designs, manufactures, and sells electric vehicles and clean energy products.",
    foundedYear: 2003,
    employeeCount: 140473,
    revenue: 96400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    website: "https://www.tesla.com",
  },
  {
    name: "Nike Division 18",
    industry: "Retail",
    location: "Beaverton, OR, USA",
    description:
      "A multinational corporation engaged in the design, development, and manufacturing of footwear and apparel.",
    foundedYear: 1964,
    employeeCount: 79400,
    revenue: 51800000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    website: "https://www.nike.com",
  },
  {
    name: "Toyota Division 19",
    industry: "Manufacturing",
    location: "Toyota City, Japan",
    description:
      "A leading automobile manufacturer producing cars, trucks, and hybrids.",
    foundedYear: 1937,
    employeeCount: 366283,
    revenue: 275400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    website: "https://www.toyota.com",
  },
  {
    name: "Toyota Division 20",
    industry: "Manufacturing",
    location: "Toyota City, Japan",
    description:
      "A leading automobile manufacturer producing cars, trucks, and hybrids.",
    foundedYear: 1937,
    employeeCount: 366283,
    revenue: 275400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    website: "https://www.toyota.com",
  },
  {
    name: "IBM Division 21",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
  {
    name: "Microsoft Division 22",
    industry: "Technology",
    location: "Redmond, WA, USA",
    description:
      "A multinational technology corporation producing software, electronics, and computers.",
    foundedYear: 1975,
    employeeCount: 221000,
    revenue: 211000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    website: "https://www.microsoft.com",
  },
  {
    name: "IBM Division 21 Division 23",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
  {
    name: "Samsung Division 24",
    industry: "Technology",
    location: "Suwon, South Korea",
    description:
      "A multinational conglomerate known for electronics, appliances, and semiconductors.",
    foundedYear: 1938,
    employeeCount: 266000,
    revenue: 244000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    website: "https://www.samsung.com",
  },
  {
    name: "Tesla Division 17 Division 25",
    industry: "Manufacturing",
    location: "Austin, TX, USA",
    description:
      "Designs, manufactures, and sells electric vehicles and clean energy products.",
    foundedYear: 2003,
    employeeCount: 140473,
    revenue: 96400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    website: "https://www.tesla.com",
  },
  {
    name: "Intel Division 26",
    industry: "Technology",
    location: "Santa Clara, CA, USA",
    description:
      "A multinational corporation and technology company, the world's largest semiconductor chip manufacturer.",
    foundedYear: 1968,
    employeeCount: 131900,
    revenue: 54300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    website: "https://www.intel.com",
  },
  {
    name: "Microsoft Division 27",
    industry: "Technology",
    location: "Redmond, WA, USA",
    description:
      "A multinational technology corporation producing software, electronics, and computers.",
    foundedYear: 1975,
    employeeCount: 221000,
    revenue: 211000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    website: "https://www.microsoft.com",
  },
  {
    name: "Nike Division 18 Division 28",
    industry: "Retail",
    location: "Beaverton, OR, USA",
    description:
      "A multinational corporation engaged in the design, development, and manufacturing of footwear and apparel.",
    foundedYear: 1964,
    employeeCount: 79400,
    revenue: 51800000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    website: "https://www.nike.com",
  },
  {
    name: "IBM Division 29",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
  {
    name: "Amazon Division 30",
    industry: "Retail",
    location: "Seattle, WA, USA",
    description:
      "An American multinational technology company focusing on e-commerce, cloud computing, and AI.",
    foundedYear: 1994,
    employeeCount: 1548000,
    revenue: 574000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    website: "https://www.amazon.com",
  },
  {
    name: "IBM Division 31",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
  {
    name: "Nike Division 18 Division 32",
    industry: "Retail",
    location: "Beaverton, OR, USA",
    description:
      "A multinational corporation engaged in the design, development, and manufacturing of footwear and apparel.",
    foundedYear: 1964,
    employeeCount: 79400,
    revenue: 51800000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    website: "https://www.nike.com",
  },
  {
    name: "IBM Division 21 Division 23 Division 33",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
  {
    name: "IBM Division 34",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
  {
    name: "Toyota Division 35",
    industry: "Manufacturing",
    location: "Toyota City, Japan",
    description:
      "A leading automobile manufacturer producing cars, trucks, and hybrids.",
    foundedYear: 1937,
    employeeCount: 366283,
    revenue: 275400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    website: "https://www.toyota.com",
  },
  {
    name: "Nike Division 18 Division 36",
    industry: "Retail",
    location: "Beaverton, OR, USA",
    description:
      "A multinational corporation engaged in the design, development, and manufacturing of footwear and apparel.",
    foundedYear: 1964,
    employeeCount: 79400,
    revenue: 51800000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    website: "https://www.nike.com",
  },
  {
    name: "Apple Division 37",
    industry: "Technology",
    location: "Cupertino, CA, USA",
    description:
      "Designs, manufactures, and markets smartphones, personal computers, and electronics.",
    foundedYear: 1976,
    employeeCount: 164000,
    revenue: 383000000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    website: "https://www.apple.com",
  },
  {
    name: "Tesla Division 16 Division 38",
    industry: "Manufacturing",
    location: "Austin, TX, USA",
    description:
      "Designs, manufactures, and sells electric vehicles and clean energy products.",
    foundedYear: 2003,
    employeeCount: 140473,
    revenue: 96400000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    website: "https://www.tesla.com",
  },
  {
    name: "IBM Division 21 Division 39",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
  {
    name: "IBM Division 29 Division 40",
    industry: "Technology",
    location: "Armonk, NY, USA",
    description:
      "A multinational technology company providing hardware, software, and consulting services.",
    foundedYear: 1911,
    employeeCount: 288300,
    revenue: 61300000000,
    isHiring: true,
    companyPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    website: "https://www.ibm.com",
  },
];
module.exports = companyData;

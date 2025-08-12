"use client"

import { useState, useEffect } from "react"
import { Paper, TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography, Chip } from "@mui/material"
import { Search, Business, LocationOn } from "@mui/icons-material"
import styles from "./FilterControls.module.css"

const FilterControls = ({ filters, onFilterChange, totalResults }) => {
  const [searchValue, setSearchValue] = useState(filters.search)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchValue !== filters.search) {
        onFilterChange({ search: searchValue, page: 1 })
      }
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchValue, filters.search, onFilterChange])

  const handleInputChange = (field, value) => {
    if (field === "search") {
      setSearchValue(value)
    } else {
      onFilterChange({ [field]: value, page: 1 })
    }
  }

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Real Estate",
    "Consulting",
  ]

  const locations = ["New York", "California", "Texas", "Florida", "Illinois", "Washington", "Massachusetts", "Georgia"]

  const sortOptions = [
    { value: "name", label: "Name (A-Z)" },
    { value: "-name", label: "Name (Z-A)" },
    { value: "employees", label: "Employees (Low-High)" },
    { value: "-employees", label: "Employees (High-Low)" },
    { value: "revenue", label: "Revenue (Low-High)" },
    { value: "-revenue", label: "Revenue (High-Low)" },
    { value: "founded", label: "Founded (Old-New)" },
    { value: "-founded", label: "Founded (New-Old)" },
  ]

  return (
    <Paper elevation={0} className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h6" className={styles.title}>
          Filter & Search
        </Typography>
        <Chip label={`${totalResults} companies`} color="primary" size="small" className={styles.resultChip} />
      </Box>

      <Box className={styles.filters}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search companies..."
          value={searchValue}
          onChange={(e) => handleInputChange("search", e.target.value)}
          InputProps={{
            startAdornment: <Search className={styles.searchIcon} />,
          }}
          className={styles.searchField}
        />

        <FormControl fullWidth className={styles.select}>
          <InputLabel>Industry</InputLabel>
          <Select
            value={filters.industry}
            label="Industry"
            onChange={(e) => handleInputChange("industry", e.target.value)}
            startAdornment={<Business className={styles.selectIcon} />}
          >
            <MenuItem value="">All Industries</MenuItem>
            {industries.map((industry) => (
              <MenuItem key={industry} value={industry}>
                {industry}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth className={styles.select}>
          <InputLabel>Location</InputLabel>
          <Select
            value={filters.location}
            label="Location"
            onChange={(e) => handleInputChange("location", e.target.value)}
            startAdornment={<LocationOn className={styles.selectIcon} />}
          >
            <MenuItem value="">All Locations</MenuItem>
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth className={styles.select}>
          <InputLabel>Sort By</InputLabel>
          <Select value={filters.sort} label="Sort By" onChange={(e) => handleInputChange("sort", e.target.value)}>
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  )
}

export default FilterControls

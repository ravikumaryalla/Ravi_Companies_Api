"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
  Alert,
  Fade,
} from "@mui/material";
import FilterControls from "./components/FilterControls";
import CompanyTable from "./components/CompanyTable";
import CompanyCards from "./components/CompanyCards";
import ViewToggle from "./components/ViewToggle";
import Pagination from "./components/Pagination";
import styles from "./App.module.css";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [viewMode, setViewMode] = useState("table");
  const [filters, setFilters] = useState({
    search: "",
    industry: "",
    location: "",
    sort: "name",
    page: 1,
    limit: 10,
  });
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchCompanies = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const queryParams = new URLSearchParams();

      if (filters.search) queryParams.append("search", filters.search);
      if (filters.industry) queryParams.append("industry", filters.industry);
      if (filters.location) queryParams.append("location", filters.location);
      if (filters.sort) queryParams.append("sort", filters.sort);
      queryParams.append("page", filters.page.toString());
      queryParams.append("limit", filters.limit.toString());

      const response = await fetch(
        `http://localhost:4000/api/v1/companies?${queryParams}`
      );
      console.log(response, "response");

      if (!response.ok) {
        throw new Error("Failed to fetch companies");
      }

      const data = await response.json();
      console.log(data.data.companies, "data");
      setCompanies(data.data.companies || []);
      setTotalPages(Math.ceil((data.total || 0) / filters.limit));
      setTotalResults(data.total || 0);
    } catch (err) {
      setError(err.message);
      setCompanies([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
      page: newFilters.page || 1,
    }));
  }, []);

  const handlePageChange = useCallback((page) => {
    setFilters((prev) => ({ ...prev, page }));
  }, []);

  return (
    <div className={styles.app}>
      <Container maxWidth="xl" className={styles.container}>
        <Fade in timeout={800}>
          <Paper elevation={0} className={styles.header}>
            <Typography variant="h3" component="h1" className={styles.title}>
              Company Management
            </Typography>
            <Typography variant="h6" className={styles.subtitle}>
              Manage and explore your company database
            </Typography>
          </Paper>
        </Fade>

        <Box className={styles.controls}>
          <FilterControls
            filters={filters}
            onFilterChange={handleFilterChange}
            totalResults={totalResults}
          />
          <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
        </Box>

        {error && (
          <Alert severity="error" className={styles.error}>
            {error}
          </Alert>
        )}

        <Box className={styles.content}>
          {loading ? (
            <Box className={styles.loading}>
              <CircularProgress size={60} />
              <Typography variant="h6" className={styles.loadingText}>
                Loading companies...
              </Typography>
            </Box>
          ) : (
            <Fade in timeout={600}>
              <div>
                {viewMode === "table" ? (
                  <CompanyTable companies={companies} />
                ) : (
                  <CompanyCards companies={companies} />
                )}
              </div>
            </Fade>
          )}
        </Box>

        {!loading && companies.length > 0 && (
          <Pagination
            currentPage={filters.page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </div>
  );
};

export default App;

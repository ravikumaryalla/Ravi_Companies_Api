"use client"

import { Paper, Pagination as MuiPagination, Box, Typography } from "@mui/material"
import styles from "./Pagination.module.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (event, page) => {
    onPageChange(page)
  }

  if (totalPages <= 1) return null

  return (
    <Paper elevation={0} className={styles.container}>
      <Box className={styles.paginationWrapper}>
        <Typography variant="body2" className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </Typography>
        <MuiPagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          className={styles.pagination}
        />
      </Box>
    </Paper>
  )
}

export default Pagination

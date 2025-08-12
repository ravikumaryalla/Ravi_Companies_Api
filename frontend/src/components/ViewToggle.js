"use client"

import { Paper, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { TableChart, ViewModule } from "@mui/icons-material"
import styles from "./ViewToggle.module.css"

const ViewToggle = ({ viewMode, onViewChange }) => {
  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      onViewChange(newView)
    }
  }

  return (
    <Paper elevation={0} className={styles.container}>
      <ToggleButtonGroup value={viewMode} exclusive onChange={handleViewChange} className={styles.toggleGroup}>
        <ToggleButton value="table" className={styles.toggleButton}>
          <TableChart className={styles.icon} />
          Table
        </ToggleButton>
        <ToggleButton value="cards" className={styles.toggleButton}>
          <ViewModule className={styles.icon} />
          Cards
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  )
}

export default ViewToggle

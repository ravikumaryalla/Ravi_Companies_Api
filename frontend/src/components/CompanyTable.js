import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import {
  Business,
  People,
  AttachMoney,
  CalendarToday,
} from "@mui/icons-material";
import styles from "./CompanyTable.module.css";

const CompanyTable = ({ companies }) => {
  console.log("companies ion comp table", companies);
  const formatCurrency = (amount) => {
    if (!amount) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    if (!num) return "N/A";
    return new Intl.NumberFormat("en-US").format(num);
  };

  const getStatusColor = (status) => {
    return status ? "success" : "error";
  };

  const getIndustryIcon = (industry) => {
    return <Business className={styles.industryIcon} />;
  };

  return (
    <Paper elevation={0} className={styles.container}>
      <TableContainer className={styles.tableContainer}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className={styles.headerCell}>Company</TableCell>
              <TableCell className={styles.headerCell}>Industry</TableCell>
              <TableCell className={styles.headerCell}>Location</TableCell>
              <TableCell className={styles.headerCell}>Employees</TableCell>
              <TableCell className={styles.headerCell}>Revenue</TableCell>
              <TableCell className={styles.headerCell}>Founded</TableCell>
              <TableCell className={styles.headerCell}>Is Hiring</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company, index) => (
              <TableRow key={company.id || index} className={styles.tableRow}>
                <TableCell className={styles.companyCell}>
                  <Box className={styles.companyInfo}>
                    <Avatar className={styles.avatar}>
                      {company.name?.charAt(0) || "C"}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        className={styles.companyName}
                      >
                        {company.name || "Unknown Company"}
                      </Typography>
                      <Typography
                        variant="caption"
                        className={styles.companySubtext}
                      >
                        {company.website || "No website"}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box className={styles.industryCell}>
                    {getIndustryIcon(company.industry)}
                    <Typography variant="body2">
                      {company.industry || "N/A"}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" className={styles.location}>
                    {company.location || "N/A"}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box className={styles.metricCell}>
                    <People className={styles.metricIcon} />
                    <Typography variant="body2">
                      {formatNumber(company.employeeCount)}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box className={styles.metricCell}>
                    <AttachMoney className={styles.metricIcon} />
                    <Typography variant="body2" className={styles.revenue}>
                      {formatCurrency(company.revenue)}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box className={styles.metricCell}>
                    <CalendarToday className={styles.metricIcon} />
                    <Typography variant="body2">
                      {company.foundedYear || "N/A"}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={company.isHiring ? "Yes" : "No"}
                    color={getStatusColor(company.isHiring)}
                    size="small"
                    className={styles.statusChip}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CompanyTable;

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import {
  Business,
  People,
  AttachMoney,
  CalendarToday,
  LocationOn,
  Language,
} from "@mui/icons-material";
import styles from "./CompanyCards.module.css";

const CompanyCards = ({ companies }) => {
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
    switch (status?.toLowerCase()) {
      case "active":
        return "success";
      case "inactive":
        return "error";
      case "pending":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Grid container spacing={3}>
      {companies.map((company, index) => (
        <Grid item xs={12} sm={6} lg={4} key={company.id || index}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Box className={styles.header}>
                <Avatar className={styles.avatar}>
                  {company.name?.charAt(0) || "C"}
                </Avatar>
                <Box className={styles.headerInfo}>
                  <Typography variant="h6" className={styles.companyName}>
                    {company.name || "Unknown Company"}
                  </Typography>
                  <Chip
                    label={company.status || "Unknown"}
                    color={getStatusColor(company.status)}
                    size="small"
                    className={styles.statusChip}
                  />
                </Box>
              </Box>

              <Divider className={styles.divider} />

              <Box className={styles.details}>
                <Box className={styles.detailItem}>
                  <Business className={styles.icon} />
                  <Typography variant="body2" className={styles.detailText}>
                    {company.industry || "N/A"}
                  </Typography>
                </Box>

                <Box className={styles.detailItem}>
                  <LocationOn className={styles.icon} />
                  <Typography variant="body2" className={styles.detailText}>
                    {company.location || "N/A"}
                  </Typography>
                </Box>

                <Box className={styles.detailItem}>
                  <People className={styles.icon} />
                  <Typography variant="body2" className={styles.detailText}>
                    {formatNumber(company.employeeCount)} employees
                  </Typography>
                </Box>

                <Box className={styles.detailItem}>
                  <AttachMoney className={styles.icon} />
                  <Typography variant="body2" className={styles.revenueText}>
                    {formatCurrency(company.revenue)}
                  </Typography>
                </Box>

                <Box className={styles.detailItem}>
                  <CalendarToday className={styles.icon} />
                  <Typography variant="body2" className={styles.detailText}>
                    Founded {company.foundedYear || "N/A"}
                  </Typography>
                </Box>

                {company.website && (
                  <Box className={styles.detailItem}>
                    <Language className={styles.icon} />
                    <Typography variant="body2" className={styles.websiteText}>
                      {company.website}
                    </Typography>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyCards;

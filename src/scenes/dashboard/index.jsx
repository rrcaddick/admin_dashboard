import { Box, Button, IconButton, Typograph, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/line-chart";
import PieChart from "../../components/pie-chart";
import BarChart from "../../components/bar-chart";
import GeographyChart from "../../components/geography-chart";
import StatBox from "../../components/stat-box";
import ProgressCircle from "../../components/progress-circle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* Download Button */}
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              p: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid and Charts */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="110px" gap="12px">
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New CLients"
            progress="0.75"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.8"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSixe: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="200px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transactions */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((tran, i) => (
            <Box
              key={`${tran.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {tran.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{tran.user}</Typography>
              </Box>
              <Box>
                <Typography color={colors.grey[100]}>{tran.date}</Typography>
              </Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                <Typography>${tran.cost}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        {/* Box 1 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="15px 30px 15px 30px">
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="100" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        {/* Box 2 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Typography variant="h5" fontWeight="600" sx={{ p: "15px 30px 0 30px" }}>
            Sales Quanity
          </Typography>
          <Box height="210px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* Box 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="15px 30px 15px 30px"
          overflow="hidden"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

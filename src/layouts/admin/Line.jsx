import { Box } from "@mui/material";
import Header from "../../components/admin/Header";
import LineChart from "../../components/admin/LineChart";


function Line() {

    return (
        <Box m="20px">
          <Header title="Line Chart" subtitle="Simple Line Chart" />
          <Box height="75vh">
            <LineChart />
          </Box>
        </Box>
      );
    };


export default Line;
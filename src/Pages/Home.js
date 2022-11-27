import Box from "@mui/material/Box";
import Profile from '../components/Profile/Profile'
import AvailableList from "../components/AvailableList/AvailableList";

const Home = () => {
  return(
    <Box style={{display:"flex", height:"90vh", width:"100%"}}>
      <Box style={{ width:"20%"}}>
        Left side
        <Profile/>
        <AvailableList/>
      </Box>
      <Box style={{ width:"60%"}}>News feed</Box>
      <Box style={{ width:"20%"}}>Right side</Box>
    </Box>
  );
}

export default Home;
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const userList = [
  {
    userName: "Abdul",
    isOnline: true,
    profile: "",
  },
  {
    userName: "Saran",
    isOnline: true,
    profile: "",
  },
  {
    userName: "Chendoor",
    isOnline: false,
    profile: "",
  },
];
const AvailableList = () => {
  return (
    <Paper elevation={3} style={{ height: "70%" }}>
      {userList.map((user) => (
        <Box
          style={{
            display: "flex",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ display: "flex" }}>
            <Avatar sx={{ width: 24, height: 24 }} src={user.profile} />
            <Typography style={{paddingLeft:"10px"}}>{user.userName}</Typography>
          </Box>
          <Brightness1Icon
            fontSize="small"
            color={user.isOnline ? "success" : "error"}
          />
        </Box>
      ))}
    </Paper>
  );
};

export default AvailableList;

import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Profile = () => {
  return (
    <Paper elevation={3} style={{ height: "30%" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "1rem",
        }}
      >
        <Avatar />
        <Typography style={{ display: "flex", alignItems: "center" }}>
          profile card
        </Typography>
      </Box>
    </Paper>
  );
};

export default Profile;

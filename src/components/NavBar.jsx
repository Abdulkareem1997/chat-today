import {useContext} from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChatIcon from '@mui/icons-material/Chat';
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom'
import { Icon } from '@mui/material';

const NavBar = ({isAuth, setIsAuth}) => {
  const history = useHistory()
  console.log(isAuth,"auth context")

  const handleLogout = () => {
    if(isAuth){
      setIsAuth(false)
      history.push('/')
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }} style={{height:"10vh"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="chat"
          >
            <ChatIcon/>
          </IconButton>
            Chat Today
          </Typography>
          <Button color="inherit" onClick={handleLogout}>{isAuth ? 'Logout' : 'Login'}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
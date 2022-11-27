import * as React from "react";
import {useState} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useHistory} from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginPage = ({isAuth, setIsAuth}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const [snackmsg, setSnackmsg] = useState('')
  const history = useHistory()

  const creds = {user:"Abdul", password: "Test@123"}

  const handleLogin = () => {
    if(userName === creds.user){
      if(password === creds.password){
        
        console.log("logged in successfully")
        setSnackmsg("logged in successfully")
        setIsAuth(true)
        setTimeout(()=>{
        history.push("/home")
        },1000)
      }else{
        console.log("password incorrect")
        setSnackmsg("password incorrect")
      }
    }else{
      console.log("user not found")
      setSnackmsg("user not found")
    }
    setOpen(true)
  }

  return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"10%"
        }}
      >
        <Paper
          elevation={16}
          style={{
            display: "flex",
            flexDirection: "column",
            gap:"20px",
            height: "300px",
            width: "500px",
            padding:"20px 50px"
          }}
        >
          <h1>Login</h1>
          <TextField
            id="standard-username-input"
            value={userName}
            label="Username"
            type="text"
            autoComplete="current-password"
            variant="standard"
            onChange={(e)=>setUserName(e.target.value)}
          />
          <TextField
            id="standard-password-input"
            value={password}
            label="Password"
            // type="password"
            type="text"
            autoComplete="current-password"
            variant="standard"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={handleLogin}>LOGIN</Button>
        </Paper>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert severity={isAuth ? "success": "error"} sx={{ width: '100%' }}>
            {snackmsg}
          </Alert>
        </Snackbar>
      </Box>
  );
};

export default LoginPage;

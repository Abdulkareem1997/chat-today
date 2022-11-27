
import './App.css';
import LoginPage from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import {
  Route,
  Switch,
  useLocation,
  useHistory
} from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const location = useLocation();
  const history = useHistory();


  return (
    <div className="App">
        <NavBar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Switch>
          <Route exact path="/">
            <LoginPage setIsAuth={setIsAuth} isAuth={isAuth}/>
          </Route>
          {isAuth && <>
          <Route path="/home">
            <Home/>
          </Route>
          </>}
        </Switch>
    </div>
  );
}

export default App;

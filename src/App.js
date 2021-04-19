import './App.css';
// import openSocket from 'socket.io-client';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Forgot from './pages/forgot';
import Validate from './pages/validate';
import Dashboard from './pages/dashboard/index';
import Counting from './pages/dashboard/Counting';
import Environment from './pages/dashboard/Environment';
import Connectivity from './pages/dashboard/Connectivity';
import Safety from './pages/dashboard/Safety';
import Video from './pages/dashboard/Video';
import Settings from './pages/dashboard/Settings';
import Layout from './components/Layout';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React,{ createContext } from 'react';
import { useReducer } from 'react';
import { initialState, reducer } from './reducers/userReducer';
import { useEffect } from 'react';
import { useContext } from 'react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#bdbec4'
    },
    error: {
      main: '#FECB2E',
      contrastText: '#000',
    },
  }
})

export const UserContext = createContext()

const Routing = ()=>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
  useEffect(()=>{
    // openSocket('http://localhost:5000');
    const email = localStorage.getItem("email")
    if(email){
      dispatch({type:"USER",payload:email})
      history.push('/')
    }else{
      history.push('/login')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/forgot" component={Forgot} />
      <Route exact path="/validate" component={Validate} />
      <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/counting" component={Counting} />
          <Route exact path="/environment" component={Environment} />
          <Route exact path="/connectivity" component={Connectivity} />
          <Route exact path="/safety" component={Safety} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/settings" component={Settings} />
      </Layout>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routing />
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;

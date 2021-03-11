import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom';
import Registration from './Components.js/Registration';
import Login  from './Components.js/Login';
import Dashboard from './Components.js/Dashboard';

{/* <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link> */}

class App extends Component {
  render(){
    return (
      <div className="App">
      <>
      <Switch>
      
      <Route exact path = "/"  component={Login}/>
      <Route exact path = "/Registration"  component = {Registration} /> 
      <Route exact path = "/dashboard"  component={Dashboard}/>
 
      </Switch>
       </>
      </div>
    );
  }

  }
  

export default App;

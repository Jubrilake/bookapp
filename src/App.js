import React, {useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";



import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import Footer from './components/layouts/Footer'
import './App.css';

function App() {
  useEffect(() => {
    M.AutoInit();
    //eslint-disable-next-line
  }, []);
  return (
    <Router>
   <Fragment >
     <Navbar/>
     <Switch>
     <Route exact path='/' component={Home} />

     </Switch>
    
     <Footer/>
    </Fragment>

    </Router>
 
  );
}

export default App;

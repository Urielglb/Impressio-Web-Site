import React from 'react';
import './sass/App.scss';
import Home from './js/pages/home';
import Products from './js/pages/products';
import ContactUs from './js/pages/contactUs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const Routes = ()=>{
  return(
    <Switch>
      <Route path= "/contact-us">
        <ContactUs></ContactUs>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <div>
      <Routes></Routes>
    </div>
    </Router>
    
  );
}



export default App;

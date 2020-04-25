import React from 'react';
import './sass/App.scss';
import Home from './js/pages/home';
import Tshirts from './js/pages/products/tshirts'
import Printing from './js/pages/products/printing'
import Articles from './js/pages/products/articles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const Routes = ()=>{
  return(
    <Switch>
      <Route path="/playeras">
        <Tshirts></Tshirts>
      </Route>
      <Route path="/imprenta">
        <Printing></Printing>
      </Route>
      <Route path="/articulos-personalizados">
        <Articles></Articles>
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

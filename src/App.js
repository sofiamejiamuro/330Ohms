import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MapView from './views/MapView';
import LectorQr  from './views/QrReader';
import './App.css';

function App() {

  return (
    <div className = "app">
        <Router basename={process.env.PUBLIC_URL}>
          <Route exact path  = "/" component = { MapView }/> 
          <Route path  = "/LectorQr" component = { LectorQr }/>   
        </Router>
    </div>
  );

}

export default App;

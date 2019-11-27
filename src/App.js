import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MapView from './views/MapView';
import LectorQr  from './views/QrReader';
import './App.css';

function App() {

  return (
    <div claasName = "app">
        <Router basename={window.location.pathname || ""}>
        <Route path  = "/" component = { MapView }/> 
        <Route path  = "/qr" component = { LectorQr }/>   
        </Router>
    </div>
  );

}

export default App;

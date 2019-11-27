import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MapView from './views/MapView'
import './App.css';

function App() {

  return (
    <div>
        <Router basename={window.location.pathname || ""}>
        {/*  <Route path  = "/" component = { MapView }/> */}
        <Route path  = "/" component = { MapView }/>   
        </Router>
    </div>
  );
}

export default App;

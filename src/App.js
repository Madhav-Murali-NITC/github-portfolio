import logo from './logo.svg';
import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import ECommercePlatformDocumentation from './pages/projects/ECommercePlatformDocumentation';
import NITCONF from './pages/projects/NITCONF';
import RDBMS from './pages/projects/RDBMS';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/ecommerce" element={<ECommercePlatformDocumentation />} />
          <Route exact path="/nitconf" element={<NITCONF />} />
          <Route exact path="/rdbms" element={<RDBMS />} />

        </Routes>
      </Router>
    
      
    </div>

  );
}

export default App;

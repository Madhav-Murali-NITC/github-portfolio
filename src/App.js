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
          <Route path="/" element={<Landing />} />
          <Route path="/ecommerce" element={<ECommercePlatformDocumentation />} />
          <Route path="/nitconf" element={<NITCONF />} />
          <Route path="/rdbms" element={<RDBMS />} />

        </Routes>
      </Router>
    
      
    </div>

  );
}

export default App;

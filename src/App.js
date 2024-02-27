import logo from './logo.svg';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import ECommercePlatformDocumentation from './pages/projects/ECommercePlatformDocumentation';
import NITCONF from './pages/projects/NITCONF';
import RDBMS from './pages/projects/RDBMS';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ecommerce" element={<ECommercePlatformDocumentation />} />
          <Route path="/nitconf" element={<NITCONF />} />
          <Route path="/rdbms" element={<RDBMS />} />

        </Routes>
    
      
    </div>

  );
}

export default App;

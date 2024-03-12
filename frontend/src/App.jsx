import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GraphSample from './routes/About';
import DashBoardPage from './routes/DashBoard';
import HomePage from './routes/Home';
import NotFound from './routes/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Link to="/dashboard">dashboard</Link> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<GraphSample />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

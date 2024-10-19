import './App.css';
import React from 'react';
import Home from './routes/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transactions from './routes/Transactions';
import Expenses from './routes/Expenses';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </Router>
  );
};

export default App;

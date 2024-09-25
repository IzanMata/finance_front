import './App.css';
import React from 'react';
import CategoryList from './components/Category/CategoryList';
import { CategoryProvider } from './context/CategoryContext';

const App: React.FC = () => {
  return (
    <CategoryProvider>
      <CategoryList />
    </CategoryProvider>
  );
};

export default App;

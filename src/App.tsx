import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="h-screen w-screen bg-slate-800 text-white flex justify-center items-center">
      <Header message="Typescript Demo"></Header>
      <Calculator message="Test"></Calculator>
    </div>
  );
}

export default App;

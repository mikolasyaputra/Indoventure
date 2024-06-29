// src/App.jsx
import React from 'react';
import Navbar from '../src/components/Navbar';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900 min-h-screen flex items-center justify-center text-white">
        Indoventure
      </div>
    </>
  );
}

export default App;

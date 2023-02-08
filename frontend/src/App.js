import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* main page */}
      <div className='p-5 text-2xl font-semibold'>
        <h1> Main content</h1>
        </div>
      
     
    </div>
  );
}

export default App;

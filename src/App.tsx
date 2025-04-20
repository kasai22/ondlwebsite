import React from 'react';
import './App.css';
import LogisticsDiagram from './components/LogisticsDiagram';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: '#BDFE02', textAlign: 'center', marginTop: '20px' }}>
        Logistics Flow Visualization
      </h1>
      <div style={{ overflowX: 'visible', padding: '40px' }}>
        <LogisticsDiagram />
      </div>
    </div>
  );
}

export default App;

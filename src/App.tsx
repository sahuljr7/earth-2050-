import React from 'react';
import { Scene } from './components/Scene';
import { Interface } from './components/Interface';

function App() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Scene />
      <Interface />
    </div>
  );
}

export default App;
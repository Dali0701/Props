import React from 'react';
import PlayersList from './PlayersList';
import NavScrollExample from './navbar';
function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <h1 style={{ margin: '20px' }}>Player Information</h1>
      <PlayersList />
    </div>
  );
}

export default App;

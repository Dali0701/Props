import React from 'react';
import Player from './Player';
import playersData from './players';
import './PlayersList.css'; 

const PlayersList = () => {
  return (
    <div className="player-list"> 
      {playersData.map((player, index) => (
        <div key={index} className="player-card"> 
          <Player {...player} />
        </div>
      ))}
    </div>
  );
}

export default PlayersList;

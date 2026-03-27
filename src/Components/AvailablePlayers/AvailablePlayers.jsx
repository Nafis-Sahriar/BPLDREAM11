import React from "react";
import Card from "../UI/Card/Card";

const AvailablePlayers = ({ players , setCoin ,coin , selectedPlayers, setSelectedPlayers}) => 
{
//   console.log(players);

 

  return (
    <>
      {players.map((player, index) => {
        return (
          <Card key={index} player={player} setCoin ={setCoin}  coin = {coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
        );
      })}
    </>
  );
};

export default AvailablePlayers;

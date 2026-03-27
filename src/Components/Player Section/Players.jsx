import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";



const Players = ({ playerPromise, setCoin , coin }) => {

  
  // console.log(playerPromise);

  const [selectedType, setSelectedType] = useState("available");

  const [selectedPlayers, setSelectedPlayers] =useState([]);


  const players = use(playerPromise);

  return (
    <div className="w-[90%] mx-auto">
      <div className="font-bold mt-5 text-xl flex justify-between">

        {selectedType==="available" ?<h1>Available Players {players.length -selectedPlayers.length} / {players.length} </h1> : <h1>Selected {selectedPlayers.length}/{players.length}</h1>}

        <div>
          <button onClick={()=>setSelectedType("available")} className={`btn ${selectedType ==="available" ? "bg-[#E7FE29]" : "bg-base-100"}`}>Available</button>

          <button onClick={()=>setSelectedType("selected")} className={`btn ${selectedType ==="selected" ? "bg-[#E7FE29]" : "bg-base-100"}`}>Selected {selectedPlayers.length}</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">

        

        {selectedType==="available"?  <AvailablePlayers players={players} setCoin={setCoin} coin ={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>
        
         :

         
         <div className="col-span-3"><SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin ={coin}></SelectedPlayers></div>}

      </div>
    </div>
  );
};

export default Players;

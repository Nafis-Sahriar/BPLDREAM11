import React, { useState } from 'react';
import { MdPerson } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';


const Card = ({player, setCoin , coin , selectedPlayers, setSelectedPlayers}) => {

     const [isSelected, setIsSelected] = useState(false);

     const handleChoosePlayer=()=>
     {
        {
         

         if( (coin - player.price) > 0)
         {
              setCoin(coin - player.price);
            //   alert(`${player.playerName} Selected!`)
            toast.success(`${player.playerName} Selected!`);
         }
         else
         {
            // alert("Not Enough Coin , can not select this player.");
            toast.error("Not Enough Coin!");
            return;
         }

         setIsSelected(true); 

         setSelectedPlayers([...selectedPlayers, player])
       
        }
     }

    return (
        <div>
             <div className="card bg-base-100 w-full shadow-xl h-137.5">
                        <figure>
                          <img src={player.playerImage} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title text-2xl">
                            {" "}
                            <MdPerson />
                            {player.playerName}
                          </h2>
            
                          <div className="flex justify-between items-center">
                            <p className="flex gap-2 items-center text-xl">
                              <FaFlag /> {player.playerCountry}
                            </p>
                            <button className="btn">{player.playerType}</button>
                          </div>
            
                          <hr />
            
                          <h2 className="font-bold text-xl">Rating - {player.rating}</h2>
            
                          <div className="flex justify-end gap-25">
                            <p className="font-semibold">{player.battingStyle}</p>
                            <p className="font-semibold">{player.bowlingStyle}</p>
                          </div>
            
                          <div className="card-actions justify-end items-center pt-5">
                            <p className="font-bold text-xl">Price : $ {player.price}</p>

                            <button onClick={handleChoosePlayer} disabled={isSelected} className="btn">{isSelected? "Selected" : "Choose Player"}</button>

                          </div>
                        </div>
                      </div>
        </div>
    );
};

export default Card;
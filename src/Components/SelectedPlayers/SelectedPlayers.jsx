import React from 'react';
import { MdDelete } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { toast } from 'react-toastify';

const SelectedPlayers = ({selectedPlayers , setSelectedPlayers, setCoin, coin}) => {

    console.log(selectedPlayers);

    const handleDelete =(player)=>{

        selectedPlayers  = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName);

        setSelectedPlayers([...selectedPlayers]);

        // handling Coin.
        coin += player.price;
        setCoin(coin);

        toast.warning(`${player.playerName} Unselected`);

        
    }


    if(selectedPlayers.length===0)
    {
        return(
            
            <>
                <div className='min-h-[40vh] flex justify-center items-center border-4 border-gray-300 flex-col gap-6'>
                    <h2 className='font-bold text-gray-500 text-4xl'>No Player Selected Yet.</h2>
                    <p>Select a player to show here.</p>
                </div>



            </>
        )
    }

    else
    {

         return (

        <div>

            
            
            {
                selectedPlayers.map((player, index)=>{

                    return <div key={index} className='flex items-center justify-between border gap-7 w-full p-5 rounded-xl mb-5'>


                            

                                <div className='flex items-center gap-5'>
                                    <img className='w-auto h-20 rounded-xl' src={player.playerImage} alt="" />

                                    <div>
                                        <h2 className='flex items-center gap-3 font-bold text-2xl'> <IoMdPerson />{player.playerName}</h2>
                                        <p className='font-semibold text-xl'>{player.playerType}</p>
                                    </div>
                                </div>



                                <button className='btn text-red-500' onClick={()=>handleDelete(player)}>
                                    <MdDelete />
                                </button>
                          




                    </div>
                    
                })
            }


        </div>
    );
    }


   
};

export default SelectedPlayers;
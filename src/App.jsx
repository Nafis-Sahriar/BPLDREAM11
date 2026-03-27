
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/NavBar/Navbar'
import Players from './Components/Player Section/Players';
import { ToastContainer } from 'react-toastify';

const playerData = async()=>{
  const res = await fetch("/playerData.json");
  return res.json();
};

// what if I call and get and store the promise from here.
// const promise = playerData();
// console.log(promise);



function App() {

   const [coin, setCoin] = useState(5000000);

  const playerPromise = playerData();
  return (
    <>
    
     <Navbar coin={coin}></Navbar>
     <Banner></Banner>
     

     <Suspense fallback={<div className='flex items-center justify-center min-h-[60vh]'><span className="loading loading-bars loading-xl"></span></div>}>

             <Players playerPromise={playerPromise} setCoin ={setCoin} coin = {coin}></Players>

     </Suspense>
     
    
    {/* Toast */}
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App


import React, { useContext,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { SideBar } from './components/sidbar/SideBar'
import { Player } from './components/player/Player'
import { Display } from './components/display/Display'
import { PlayerContext } from './context/PlayerContext'




function App() {
const {audioRef,track}=useContext(PlayerContext)
useEffect(()=>{
  if (audioRef.current && track.file){
    audioRef.current.play().catch((error)=>{
      console.log(error);
      // kjhkhkjhkh
      
    })
  }
},[track.file])
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
       
        <SideBar />
        < Display />
      </div>
      <Player />
      <audio ref={audioRef} preload='auto' src={track.file}> </audio>

    </div>







  )

}

export default App

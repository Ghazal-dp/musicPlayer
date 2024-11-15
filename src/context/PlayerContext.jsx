
import { createContext, useRef, useEffect, useState } from 'react';
import { songsData } from "../assets/assets"


export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {


    
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    let indexSong=songsData[1];
    const [track, setTrack] = useState(indexSong);
    const [playStatus, setPlayStatus] = useState(false);

    

    useEffect(() => {
      
    
        setTrack(indexSong)
    }, [playStatus])
    
    
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        }, totatlTime: {
            second: 0,
            minute: 0
        }

    }
    )
 
    const play = ()=> {

        if (audioRef.current){
              audioRef.current.play();
               setPlayStatus(true);
        }
      
       
    }
const pause=()=>{
    if(audioRef.current){
        audioRef.current.pause();
    setPlayStatus(false);
    }
    
}
const palyWithId=async (id)=>{
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true)
}
const preveious =async ()=>{
     if (track.id >0){
           await setTrack(songsData[track.id-1]);
           await audioRef.current.play();
           setPlayStatus(true)
     }
}

const next =async ()=>{
    if (track.id <songsData.length-1){
          await setTrack(songsData[track.id+1]);
          await audioRef.current.play();
          setPlayStatus(true)
    }
}

    useEffect(() => {

       setTimeout(() => {
        audioRef.current.ontimeupdate=()=>{
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration *100)) + "%"
            setTime({
                currentTime: {
                    second: Math.floor(audioRef.current.currentTime % 60),
                    minute:Math.floor(audioRef.current.currentTime / 60)
                }, totatlTime: {
                    second: Math.floor(audioRef.current.duration % 60),
                    minute: Math.floor(audioRef.current.duration / 60)
                }
        
            })
        }
       }, 1000);
    }, [audioRef,playStatus])
    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        palyWithId,
        preveious,next
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider >
    )
}
export default PlayerContextProvider;
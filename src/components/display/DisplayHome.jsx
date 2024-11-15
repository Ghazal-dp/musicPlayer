import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { albumsData,songsData } from "../../assets/assets"
import { AlbumItems } from './AlbumItems'
import { SongsData } from './SongsData'






export const DisplayHome = () => {


    return (
        <div>

            <Navbar />
            <div className="mb-4">
                <h1 className="font-bold my-5">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbumItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="font-bold my-5">Today's Hot Songs</h1>
                <div className="flex overflow-auto">
                   {songsData.map((item,index)=>(<SongsData key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
                </div>
            </div>
        </div>
        
    )
}

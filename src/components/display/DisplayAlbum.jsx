import React , {useContext} from 'react'
import { Navbar } from '../navbar/Navbar'
import { useParams } from "react-router-dom"
import { albumsData,songsData } from '../../assets/assets'
import { assets } from '../../assets/assets'
import { PlayerContext } from '../../context/PlayerContext'

export const DisplayAlbum = () => {


    const { id } = useParams()
    const albumData = albumsData[id];
    const {palyWithId} =useContext(PlayerContext);
    console.log(albumData);

    return (

        <>

            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end  ">
                <img src={albumData.image} className="w-48 rounded" />

                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl ">{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className="mt-1">
                        <img src={assets.spotify_logo} className="w-5 inline-block" />
                        <b>
                            Spotify
                        </b>
                        1,323,400 Like's/
                        <b>
                            50 songs
                        </b>
                        /about 2 hour 30 minute
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img src={assets.clock_icon} className="m-auto w-4" />
            </div>
            <hr />
            {
                songsData.map((item,index)=>(
                    <div onClick={()=>palyWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 text-[#a7a7a7] items-center hover:bg-[#ffffff2b] cursor-pointer' key={index}>
                        <p className="text-white">
                            <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                            <img src={item.image} className="inline w-10 mr-5"  />
                            {item.name}
                        </p>
                        <p className="text-[15px]">{albumData.name}</p>
                        <p className="text-[15px] hidden sm:block">5 days ago</p>
                        <p className="text=[15px] text-center">{item.duration}</p>

                    </div>
                ))
            }
        </>
    )
}

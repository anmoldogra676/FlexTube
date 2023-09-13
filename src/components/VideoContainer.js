import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';



const VideoContainer = ({url}) => {
  let [videos, setVideos] = useState([]);
  
 
  useEffect(()=>{
     handleVideos(url);
  },[])
  const handleVideos = async (url)=>{
        const data = await fetch(url);
        const json = await data.json();
        // console.log(json.items)
        setVideos(json.items)  
  }
  return ( 
    <div className='pt-6 flex flex-wrap'>
      {
        videos.map((item)=> {
        return (<Link key={item.id} to={"/watch?v="+item.id}> <VideoCard  info={item} /></Link>)
}
      )
}
    </div>
  
)
}

export default VideoContainer

/*
Video container m data will comes through API



*/
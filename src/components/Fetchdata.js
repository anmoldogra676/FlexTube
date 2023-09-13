
import React, { useEffect } from 'react'

import {VideoSuggestionurl,options} from "../utils/contants.js"



const handleSearch =async (videoId)=>{
    const searcdQueryurl = VideoSuggestionurl+`search?part=snippet&relatedToVideoId=${videoId}&maxResults=50&order=date&regionCode=IN`
    const response = await fetch(searcdQueryurl,options);
	  const result = await response.json();
    console.log(result);
    console.log(result?.items);
  
}

const Fetchdata = ({uniqueId}) => {
    
    useEffect(()=>{
      handleSearch(uniqueId);
    },[])
  return (
    <>
    <h1>{uniqueId}</h1>
    <div>Fetchdata</div>
    </>
  )
}

export default Fetchdata;
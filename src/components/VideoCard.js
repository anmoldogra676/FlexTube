import React from 'react'

const ViewsConvertor =(number)=>{
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K';
  } else {
    return number.toString();
  }
}

const VideoCard = ({info}) => {

    if(!info)return info;
    //  console.log(info)
    const {snippet, statistics } =info;
    const {channelTitle, title,thumbnails,publishedAt} =snippet;
    const {viewCount}= statistics;

 
  return (

    <div className='videocard p-2 m-3 w-72 shadow-lg bg-slate-150 rounded-2xl '>
        <img alt="image" className="rounded-xl" src={thumbnails.medium.url}/>
        <ul>
            <li className='text-l mt-2 font-bold line-clamp-2'>{title}</li>
            <li className='text-sm font-medium line-clamp-2'>{channelTitle}</li>
            <li className='text-sm font-medium line-clamp-2'>{ViewsConvertor(viewCount)} views</li>            
        </ul>
    </div>
  )
}

export default VideoCard

/*
  componnt
    bg image 
    niche title 
    chanel name
    view and uploaded
*/
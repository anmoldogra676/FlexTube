import React from 'react'
import WatchPage from './WatchPage';
import { click } from '@testing-library/user-event/dist/click';
import { Link } from 'react-router-dom';

const ViewsConvertor =(number)=>{
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  }
  
const SideVideoCard = ({info}) => {
    if(!info)return info;
    //  console.log(info)
    const {snippet} =info;
    const {channelTitle, title,thumbnails} =snippet;

const handlePage=()=>{
    return(
        <>
    console.log("click")
     <WatchPage/>
     </>
    )

}

  return (
    <Link to={"/watch?v="+info?.id?.videoId}>
    <div onClick={handlePage} className='videocard p-2 m-3 w-72 shadow-lg bg-slate-150 rounded-2xl '>
        <img alt="image" className="rounded-xl" src={thumbnails?.medium?.url}/>
        <ul>
            <li className='text-l mt-2 font-bold line-clamp-2'>{title}</li>
            <li className='text-sm font-medium line-clamp-2'>{channelTitle}</li>
                      
        </ul>
    </div>
    </Link>
  )
}

export default SideVideoCard
import WatchPage from "./WatchPage";
import { Link } from "react-router-dom";


const SearchVideoCard = ({info}) => {
    if(!info)return info;
     console.log(info)
    const {snippet} =info;
    const {channelTitle, title,thumbnails} =snippet;

const handlePage=()=>{
    return(
        <>
     <WatchPage/>
     </>
    )

}

  return (
    <Link to={"/watch?v="+info?.id?.videoId}>
    <div onClick={handlePage} className='  flex  videocard p-2 m-3 w-full   bg-slate-150  '>
        <img alt="image" className="ml-10 rounded-xl h-[13rem]w-[28rem]" src={thumbnails?.medium?.url}/>
        <div className=" flex justify-center items-center ml-8 ">
        <ul>
            <li className='w-70 text-l mt-2 font-bold line-clamp-2'>{title}</li>
            <li className='text-sm font-medium line-clamp-2'>{channelTitle}</li>    
        </ul>
        </div>
    </div>
    </Link>
  )
}

export default SearchVideoCard
import { Link } from "react-router-dom";


const SideVideoCard = ({info}) => {
    if(!info)return info;
    //  console.log(info)
    const {snippet} =info;
    const {channelTitle, title,thumbnails} =snippet;

// const handlePage=()=>{
//     return(
//         <>
//     console.log("click")
//      <WatchPage/>
//      </>
//     )
// }

  return (
    
    <div className='videocard p-2 m-3 w-72 shadow-lg bg-slate-150 rounded-2xl '>
        <img alt="Logo" className="rounded-xl" src={thumbnails?.medium?.url}/>
        <ul>
            <li className='text-l mt-2 font-bold line-clamp-2'>{title}</li>
            <li className='text-sm font-medium line-clamp-2'>{channelTitle}</li>
                      
        </ul>
    </div>
    
  )

}


export default SideVideoCard
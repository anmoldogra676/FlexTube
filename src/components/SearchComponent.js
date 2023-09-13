import { useState,useEffect } from "react"
import { useParams,Link } from "react-router-dom"
import { myAuthApi } from "../utils/contants"
import SlideVideoCard from "./SearchVideoCard"



const SearchComponent = () => {
    
    const {search} = useParams()
    const [videos,setVideos] = useState([])
    
    

    useEffect(()=>{
        getSearchResults();
       },[search])


    console.log(search)
    const  getSearchResults = async()=>{
        const res =  await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=${myAuthApi}`)
        const json = await res.json()
        console.log(json.items)
        setVideos(json.items)
       
      }
    
  return (
    <div className='mt-3 pt-6 flex flex-wrap'>
      {
        videos.map((item)=> {
        return (<Link key={item.id} to={"/watch?v="+item.id}> 
        <div className=" flex flex-row  rounded-2xl  shadow-lg">
        <SlideVideoCard 
         info={item} />
         </div>
         </Link>)
}
      )
}
    </div>
  
)
  
}

export default SearchComponent
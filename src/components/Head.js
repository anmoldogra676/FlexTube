import React, { useState , useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { openMenu, togglemenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { searchSuggestions } from '../utils/contants';

const Head = () => {
  const dispatch = useDispatch();
  const handleToggle=()=>{
      dispatch(togglemenu());
  }

  const handleMenu=()=>{
    dispatch(openMenu());
}
  const [searchText ,setSearchText] = useState(""); // what we are searching
  const [searchData, setSearchData] = useState([]); // array of data that comes
  const [searchSuggestion, setSuggestions]= useState(false) // if we click outside the box don't show suggestions

  const ShowSuggestion = () => {
    setSuggestions(true);
  };

  const HideSuggestion = () => {
    setSuggestions(false);
  };

  const handleSearchField=(e)=>{
    setSearchText(e.target.value)
  }

 


  

  useEffect(()=>{  // debouncing
    const timer = setTimeout(handleSearch, 100); 
    /*
     here we are making an call to handle search
     after 1 sec so if in between 1 sec if state has been changed then we clear the previous call
     or timer new timer will be there after 1 sec 
     debouncing  ---> calling a function after certain amount of time
     like in youtube.flipkart -->search bar with each key press you should not make an api call
     so if person is writing fast --> then only make a call after certain delay lets say 300 ms
     and if it is typing slow then bydefault we will be calling api after 300ms and give them result
*/
    return()=>{
      
      clearTimeout(timer) // every time rerenders happens return is called because it removes 
      // the component and again rerenders the process
    }

   },[searchText])

  const handleSearch = async ()=>{
    // console.log("api" +searchText)
  const data = await fetch(searchSuggestions+""+searchText);
  const json = await data.json();
  // console.log(json[1])  
  setSearchData(json[1]);
 }

  return (
    <div className='grid grid-flow-col shadow-lg '>
    <div className='flex p-4 col-span-1 '> 

    <img className="h-12 cursor-pointer" 
    onClick={handleToggle} 
    src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'></img>
    
    <Link to="/">
    <img onClick={handleMenu} className="h-12 p-2 cursor-pointer" 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjTC5_z4R9dXJfp1VeYabOQdTCMs_qLlu_A3ePQy-SytKgxAiRm0k0h4LEPPqtqy9JfA&usqp=CAU">
    </img>
    </Link>
    </div>

    <div className='p-6 col-span-10 '>
    <input className="border border-grey-850 h-8 w-3/5 px-2 rounded-l-full " 
    type='text' 
    onFocus={ShowSuggestion}
    onBlur={HideSuggestion}
    placeholder='Search' 
    onChange={handleSearchField} 
    value={searchText}>
    </input>
    
    <Link to={`search/${searchText}`}><button className='border border-gray-850 h-8 rounded-r-full px-3 ' >🔎</button></Link>
    { searchData!="" && (searchSuggestion && <div className='fixed top-[3.75rem] bg-white border rounded-lg border-slate-100 p-2 shadow-lg w-[30rem]' >
       <ul>
        {
         
          searchData.map((item)=>{
            // console.log(item)
             return <li className='hover:bg-slate-100' > {item}</li>
          })
        }
        
       </ul>
    </div>
    )}
    
    

    </div>

    <div className='p-6 col-span-1 flex'>
        <div className='mx-2 cursor-pointer'>🧑‍💻</div>
        <div className='mx-2 cursor-pointer'>🔔</div>
        <div className='mx-2 cursor-pointer'>📷</div>
    </div>
    </div>
  )
}

export default Head
import React from 'react'

const Button =
({name})=> <button type="button" className=' h-[2.25rem] border mx-2 bg-slate-200 hover:bg-slate-300 rounded-lg px-2 py-2 '>{name}</button>



const ButtonContainer = () => {
    const List =["Politics", "Indie Songs","Badiminton","Music", "Cricket", "Movies","Dua Lipa","Politics", "Indie Songs","Badiminton","Music", "Cricket", "Movies","Dua Lipa", "Tennis","Podcasts",
    "HTML", "CSS" ]
  return (
    <div className='w -full '>
      <div className='scrollbarshow sticky top-20vh overflow-x-scroll'>
    {
    List.map((item, index)=> <Button key={index}  name={item} />
    )
    }
    </div>
    </div>
  )
}

export default ButtonContainer
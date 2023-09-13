import React from 'react'
import { BiSolidUserCircle } from 'react-icons/bi';
const fontStyles = { fontSize: '25px'}
// mock data --> nested n levels
const CommentData =[
    {
        name:"Anmol Dogra",
        text : "sound is terrible mate , would be so much better if you get a proper microphone",
        reply: [
            {
                name:"Rahul Sharma",
                text : `I can say one thing this series is not going to be regular 
                js series already available on YouTube by so many creators. Kudos to you sir.`,
                reply:[
                    {
                        name:"Mohit Patyal",
                        text : "Watched your English js series and watching this one as well.Javascript  ka best tutorial hone vala h ye I am sure! The quality of content is next level sir . Loving it",
                        reply: [
                            
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"Kartik Dogra",
        text : "He is really helping students and also professionals. Hat's off to you harkirat.",
        reply: [
            {
                name:"Sakshi Dogra",
                text : `Don't diminish the value of the word "help". 
                If you are fan of him.. u can like him...
                We are fans of the word "help" and we know what it means.`,
                reply:[
                    {
                        name:"Mohit Patyal",
                        text : "Watched your English js series and watching this one as well.Javascript  ka best tutorial hone vala h ye I am sure! The quality of content is next level sir . Loving it",
                        reply: [
                            
                        ]
                    }
                ]
            }
        ]
    }
    
]

const Comment =({data})=>{
    const {name, text, reply} =data;
    return(
        <div className=' bg-slate-200 rounded-lg shadow-sm mb-6'>
        <div className='flex mt-3 '>
        <h1  className='mr-4'><BiSolidUserCircle style={fontStyles} /></h1>
        <h1 className='font-bold'>{name}</h1>
        </div>
        <h1 className='ml-10 mb-4 p-2'>{text}</h1>
        </div>
    )
}

const CommentList =({data})=>{
    
    return(
        <>
      {
         data.map((item,index)=> {
            // console.log(item.name )
                return(
                     <div key={index}>
                     <Comment  data={item} /> 
                     {/* khud ka cmnt but we have to take care of reply */}
                     <div className='ml-6'>
                     <CommentList  data={item.reply} />
                     </div>
                     </div>

             ) }
             )
                } 
      
      </>  
    )    
    
}
const CommentContainer = () => {
  return (
    <>
    <div className='font-bold text-xl mt-3 mb-5'>Comments</div>
    <CommentList data={CommentData}/>

    
    </>
  )
}

export default CommentContainer
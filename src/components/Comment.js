import React from 'react'

// mock data --> nested n levels
const CommentData =[
    {
        name:"Anmol",
        text : "hey It's me",
        reply: [
            {
                name:"Rahul",
                text : "hey It's me",
                reply:[
                    {
                        name:"Mohit",
                        text : "hey It's me",
                        reply: [
                            {
                                name:"Katik",
                                text : "hey It's me",
                                reply:[]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"Anmol",
        text : "hey It's me",
        reply: [
            {
                name:"Anmol",
                text : "hey It's me",
                reply:[ {
                    name:"Anmol",
                    text : "hey It's me",
                    reply:[
                        {
                            name:"Anmol",
                            text : "hey It's me",
                            reply: [
                                {
                                    name:"Anmol",
                                    text : "hey It's me",
                                    reply:[]
                                }
                            ]
                        }
                    ]
                }]
            }
        ]
    }
]

const Comment =({data})=>{
    const {name, text, reply} =data;
    return(
        <>
        <div className='flex  mt-1'>
        <h1  className='mr-4'>🧑‍💻</h1>
        <h1>{name}</h1>
        </div>
        <h1 className='ml-[2rem]'>{text}</h1>
        <div className='flex ml-[2rem]'>
        <h1 className='mr-[2rem]'>👍</h1>
        <h1>👎</h1>
        </div>

        </>
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
                     <div className='border ml-6'>
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
    <div>Comments :</div>
    <CommentList data={CommentData}/>

    
    </>
  )
}

export default CommentContainer
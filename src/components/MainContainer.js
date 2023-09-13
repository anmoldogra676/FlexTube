import React from 'react'
import ButtonContainer from './ButtonContainer'
import VideoContainer from './VideoContainer'
import {youtubeApi} from '../utils/contants.js'
const MainContainer = () => {
  // two things ek button and ek video containers
  return (
    <div className='p-6'>
    <ButtonContainer/>
    <VideoContainer url={youtubeApi} />
    </div>
  )
}

export default MainContainer
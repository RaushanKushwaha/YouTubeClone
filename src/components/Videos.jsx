import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({videos}) => {
    
  return (
    <Stack direction={'row'} flexWrap='wrap' justifyContent='start' gap={2} >
      {videos.map((ele,index)=>{
        return(
         <Box key={index}>
            {ele.id.videoId && <VideoCard video ={ele}/>}
            {ele.id.channelId && <ChannelCard channelDetails ={ele}/>}
         </Box>
        )
      })}
    </Stack>
  )
}

export default Videos
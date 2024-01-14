import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos.jsx'
import ChannelCard from './ChannelCard.jsx'
import {fetchFromApi}  from '../Utils/fetchFromApi'
const ChannelDetail = () => {
  const [ChannelDetail, SetChannelDetail] = useState(null);
  const[Videos,setVideos] = useState([]);
  const {id} = useParams();
  
  useEffect(()=>{
    fetchFromApi(`channels?part="snippet&id=${id}`)
    .then((data)=>SetChannelDetail(data?.items[0]));
    
    fetchFromApi(`search?channelId=${id}&part=snippet&order=data`)
    .then((data)=>setVideos(data?.items))

  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
        style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',height:'300px',zIndex:10}}
        />
        <ChannelCard/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
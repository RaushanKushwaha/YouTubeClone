import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
  demoVideoTitle,
  demoVideoUrl,
} from "../Utils/Constant.jsx";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videoId, snippet);
  return (
    <Card sx={{width:{md:'270px',xs:'100%',borderRadius:0}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#717171", height: "100px" }} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="white" fontSize='15px'>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" fontWeight="bold" color="white" sx={{fontFamily:"sans-serif",fontSize:'13px'}}>
          {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
          <CheckCircle sx={{fontSize:12,color:'#f3f3f3',ml:2}}/>
        </Typography>
      </Link>
      </CardContent>
    
    </Card>
  );
};

export default VideoCard;

import React from "react"
import {Link} from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material";

export default function VideoCard({video}) {
  const{ thumbnail,videoId,title}=video
  
  return (
    <Card sx={{width:{xs:"100%",sm:"358px",md:"320px"},boxShadow:"2px 0px 2px 4px rgba(0,0,0,0.12)",borderRadius:"7px"}}>
      <Link to={videoId ? `/video/${videoId}`:""}>
      <CardMedia image={thumbnail[0]?.url}
      alt={title}
      sx={{width:{xs:"100%", sm:"358px"},height:180}}/>
      
      </Link>
      <CardContent 
      sx={{backgroundColor:"#1e1e1e",height:"46px",width:{xs:"100%",}}}>

<Link to={videoId ? `/video/${videoId}`:""}>

  <Typography variant="subtitle1"
   fontWeight="bold"
    color="#FFF">
    {title.slice(0,70)}
  </Typography>
</Link>


      </CardContent>
    </Card>
  );
}

import React from "react";
import {Stack,Box} from "@mui/material"
// import VideoCard from "./videoCard";
import VideoCard from "./videoCard";
export default function Videos({videos}){
    console.log(videos)
    
    return(
       <Stack
       direction="row"
       flexWrap="wrap"
       justifyContent="start"
       gap={2}>
        {videos.map((video,index)=>(
            <Box key={index}>
                {video.videoId && <VideoCard video={video} />}



            </Box>
        ))}



       </Stack>
    )
}
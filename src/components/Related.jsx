import React from "react";
import {Stack,Box} from "@mui/material"
// import VideoCard from "./videoCard";
import VideoCard from "./videoCard";
export default function Related({related}){
    
    
    return(
       <Stack
       direction="column"
       flexWrap="wrap"
       justifyContent="start"
       gap={2}>
        {related.map((video,index)=>(
            <Box key={index}>
                {video.videoId && <VideoCard video={video} />}
            </Box>
        ))}
       </Stack>
    )
}
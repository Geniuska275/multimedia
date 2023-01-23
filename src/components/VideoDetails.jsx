import React from "react";
import {useState,useEffect} from "react";
import { fetchAPI } from "../utils.js/fetchAPI";
import {Link,useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Typography,Box,Stack} from "@mui/material";
import Related from "./Related";
import Videos from "./Videos"
import { fetchFromAPI } from "../utils.js/fetchFROMApi";


import VideoCard from "./videoCard";

export default function VideoDetails() {
  const [related,setRelated]=useState([])
  
  const [videoDetails,setVideosDetails]=useState(null)
  const {id}=useParams()
  console.log(id)
  useEffect(()=>{
    fetchFromAPI('related').then((data)=>{
      console.log(data.data)
      setRelated(data.data)})
   },[])

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:"column" ,md:"row"}}>
        <Box flex={1}>
          <Box sx={{width:"100%",position:"sticky",top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls/>
          </Box>
        
        </Box>
      <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
         <Related related={related} direction="column"/>
      </Box>
      </Stack>
    </Box>
  );
}

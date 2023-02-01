import React from "react";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import Videos from "./Videos";
import { moviesAPI } from "../utils.js/moviesAPI";
import {Box ,Typography} from "@mui/material"
import { fetchAPI } from "../utils.js/fetchAPI";

export default function SearchTerm({mode}) {
  const[videos,setVideos]=useState([])
  const{ searchTerm} =useParams()

  useEffect(()=>{
      if(searchTerm=== "Trending" || "related" || "channel"){
      moviesAPI(`${searchTerm}`).then((data)=>{
        console.log(data)
      })
      fetchAPI(`${searchTerm}`).then((data)=>{
        console.log(data)
        setVideos(data.data)})} else{
          setVideos([])
        }
    
  },[searchTerm]);  
  return (
    <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
      {videos.length > 0 ?<div>
        <Typography variant="h4" fontweight="bold" mb={2} sx={{color:mode? "black" :"white"}}>
          Search Result for :<span style={{color:"red"}}>{searchTerm}</span>  videos.</Typography>
        <Videos videos={videos}/>
      </div>
      :<Typography variant="h4" fontweight="bold" sx={{color:mode?"black":"white"}}> No results for <span style={{color:"red"}}>
        {searchTerm} 
        </span> videos.
        </Typography>}
    </Box>
  );
}

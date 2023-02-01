import React from "react";
import {useState,useEffect} from "react"
import { Box, Typography,Stack } from "@mui/material";
import Sidebar from "./Sidebar"
import { fetchFromAPI } from "../utils.js/fetchFROMApi";
import { moviesAPI } from "../utils.js/moviesAPI";
import Videos from "./Videos";
import Footer from "./Footer";
import { fetchAPI } from "../utils.js/fetchAPI";
import VideoDetails from "./VideoDetails"
import { fetcher } from "../utils.js/fetcher";
import Related from "./Related";
import BackToTop from "./BackToTop";
import Loading from "./loading";
export default function Feed({mode,setMode}) {
  const[selectedCategory,setSelectedCategory]=useState("channel")
  const [videos,setVideos]=useState([])
  const [related,setRelated]=useState([])
  const [loading,setisLoading]=useState(true)
  
  console.log(videos)

  // useEffect(()=>{
  //   console.log(selectedCategory)
  //    fetchFromAPI(`${selectedCategory}`).then((data)=>{
  //     console.log(data)
  //     setVideos(data)})
  // },[selectedCategory])
   

  useEffect(()=>{
    if(selectedCategory==="trending" || selectedCategory==="channel"){
    fetchAPI(`${selectedCategory}`).then((data)=>{
      console.log(data)
      setVideos(data.data)
    })} 
  },[selectedCategory])

        
   useEffect(()=>{
    fetchFromAPI('related').then((data)=>{
      console.log(data.data)
      setRelated(data.data)})
   },[])
  useEffect(()=>{
    if(selectedCategory==="related"){
      fetchFromAPI(`${selectedCategory}`).then((data)=>{
        console.log(data)
        setVideos(data.data)
        setRelated(data.data)
      })} 
  },[selectedCategory])
  useEffect(()=>{
    if(selectedCategory==="video"){
      fetcher(`${selectedCategory}`).then((data)=>{
        console.log(data)
        // setVideos(data.data)
      })} 
  },[selectedCategory])
  useEffect(()=>{
  
      moviesAPI("youtube-search").then((data)=>{
        console.log(data)
      })
    

  },[selectedCategory])

   useEffect(()=>{
    const timer=setTimeout(()=>{
       setisLoading(false)
    },3000)
    return ()=>clearTimeout()
   },[])
  return (
  
    <Stack sx={{flexDirection:{sx:"column",md:"row",}}}>
     <Box sx={{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{sx:0,md:2}}}>
      <Sidebar mode={mode} setMode={setMode} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    

    </Box>
    <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} mt={2} sx={{color:mode?"black":"white"}}>
        {selectedCategory == "videos" ?"Education" : selectedCategory}<span style={{color:"#F31053"}}>({videos.length==0 ? "": videos.length})</span>
      </Typography>
      {/* <img src="Screenshot_11.jpg" alt="dp" style={style} /> */}
     
      <Box sx={{marginLeft:{xs:0,md:"80px"}}}>
    <Videos videos={videos}/>
    </Box> 
   
   </Box>




    
    
   </Stack>
  
  
  )
}

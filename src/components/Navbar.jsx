import React from "react";
import { Box, Typography ,Stack} from "@mui/material";
import {Link} from "react-router-dom"
import SearchBar from "./searchBar"

const Navbar=({mode})=>{
  const style={
    borderRdius:"50%",
    height:"50px",
    width:"50px", 
    
  }
  
  return (
    <>
    <Stack
   alignItems="center"
   direction="row"
   p={2}
   
   sx={{ 
  

    backgroundColor:mode?"rgba(248,249,255,0.7)":"black",zIndex:1000,position:"sticky",top:0,justifyContent:"space-between" ,boxShadow:"2px 3px 2px 2px rgb(0,0,0,0.1)"}}
   >


    <Link to="/" style={{display:"flex",alignItems:"center"}}>
      <img src="tube.png"   style={style}/>
    </Link>
      <SearchBar elevation={6}/>
   </Stack>
   </>
)
 
  }
 export default Navbar
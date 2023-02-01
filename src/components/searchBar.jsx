// import {Typography } from "@mui/material"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {Paper,IconButton} from "@mui/material"
import {Search} from "@mui/icons-material"




export default function SearchBar(){
    const [searchTerm,setSearchTerm]=useState("")
    console.log(searchTerm)
    const navigate=useNavigate()
const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("ran")
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm("")
        }

    }
    return(
        <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            pl:2,
            border:"1px solid #e3e3e3",
            borderRadius:20,
            mr:{sm:5},
            boxShadow:"none"
        }}
        >
            <input 
            className="search-bar"
            placeholder="search..."
             value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)} 
            style={{fontWeight:"bold",color:"red"}} 
                             
            />
            <IconButton type="submit" sx={{p:"10px",color:"red"}}>
                <Search/>
            </IconButton>




        </Paper>
    )
}
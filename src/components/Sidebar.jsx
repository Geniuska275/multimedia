import React from "react"
import { Stack, ListItemButton, Switch, ListItemIcon ,Box} from "@mui/material"
import { categories } from "../utils.js/constants"
import { ModeNight } from "@mui/icons-material"


const selectedCategory = "New";
export default function Sidebar({ mode, setMode,selectedCategory,setSelectedCategory }) {
    return (
        <Stack
            direction="row"
            sx={{
                overflow: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
                
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={()=>setSelectedCategory(category.name )}
                    style={{
                        backgroundColor: category.name === selectedCategory && '#FC1503',
                        color: mode ? "#000" : "white",
                        marginRight: "10px"
                    }}
                    key={category.name}
                >
                    <span style={{
                        color: category.name === selectedCategory ? "white" : "red",
                        marginRight: "15px"
                    }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? 1 : 0.7 }}>{category.name}</span>

                </button>
            ))}

        
                <ListItemButton  onClick={()=>setMode(prevmode=>!prevmode)} component="a" href="#homepage">
                <ListItemIcon>
                    <ModeNight style={{
                    color:"grey"
                    }}/>
                </ListItemIcon>
                <Switch />
            </ListItemButton>
            
        </Stack>

    )
}
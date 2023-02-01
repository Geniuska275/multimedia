
import Skeleton from "@mui/material/Skeleton"



export default function Loading({children}){
    return(   
        <Skeleton animation="wave"
       >{children}</Skeleton>   
    )
}
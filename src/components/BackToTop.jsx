import {useState,useEffect} from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function BackToTop({mode}){
    const [backtotop,setBacktotop]=useState(false)

      useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBacktotop(true)
            }else{
                setBacktotop(false)
            }
        })

      },[])
      const scrollup=()=>{
         window.scrollTo(
            {
                top:0,
                behavior:"smooth"
            }
         )
      }

    return(
        <>     
        {backtotop && (
            <button style={{
              position:"fixed",
              bottom:"80px",
              right:"30px",
              borderRadius:"50%",
              width:"60px",
              height:"60px",
              cursor:"pointer",
              backgroundColor:"#FC1503",
              boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.3)",
              zIndex:2,
              color: mode?"white":"black",
              fontSize:"20px"
            }} onClick={scrollup}><ArrowUpwardIcon/>
            </button>
        )}
        </>
    )
}
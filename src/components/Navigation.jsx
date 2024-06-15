import React from 'react'
import {Box,styled,TextField,Button} from "@mui/material"
import { LuHeart } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";






const Maincontainer = styled(Box)(() => ({
    width: "100%",
   
    height:"60px",
    backgroundColor:"#003F62",
    position:"relative"
}));


const Navigation = () => {
  const handleFocus = (event) => {
    event.target.style.border = 'none'; 
    event.target.style.outline = 'none'; 
  };
  return (
    <>

    <Maincontainer>

        <Box sx={{width:"100%"}}>
          {/* <Box sx={{height:"28%",width:"34%",position:"absolute",left:"30%",top: "13px"}}> */}
       
           <div className="search-wrap" style={{position:"absolute",left:"29%",top:"11px"}}>

          <input type="text" name="" id="" placeholder='Search any things'  onFocus={handleFocus} style={{backgroundColor:"white",height:"6px",borderRadius:"20px",width:"20rem",border:"none",padding:"15px"}} />
          <button style={{width:"7rem",marginLeft:'-60px',height:"30px",backgroundColor:"#EDA415",border:"none",borderRadius:"15px",color:"white"}}>Search</button>
           </div>

         

          {/* </Box> */}
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>

            <Box sx={{position:"absolute",right:"20%",top:"15px",display:"flex",gap:".5rem",justifyContent:"center",alignItems:"center"}}>
            <LuHeart color='white' />
            <div style={{height:".8rem",width:".8rem",borderRadius:"50%",backgroundColor:"#EDA415",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"-.4rem"}}>   <span style={{fontSize:".7rem",color:"white"}}>0</span></div>
            <p style={{marginLeft:".5rem",color:"white",marginBottom:"0"}}>sign in</p>

            <HiOutlineShoppingCart color='white' style={{marginLeft:"10px"}} />
            <div style={{height:".8rem",width:".8rem",borderRadius:"50%",backgroundColor:"#EDA415",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"-.4rem"}}>   <span style={{fontSize:".7rem",color:"white"}}>0</span></div>

            <p style={{marginLeft:".5rem",color:"white",marginBottom:"0"}}>cart</p>



            </Box>





          </Box>


        </Box>

    </Maincontainer>

    
    
    
    </>
  )
}

export default Navigation
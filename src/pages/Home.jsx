import React from 'react'
import Navigation from '../components/Navigation'
import {Box,styled} from "@mui/material"
import Sidebar from '../components/Sidebar';
import { Data } from '../assets/Data';
import MainproductContainer from '../components/MainproductContainer';

const Breadcrambcontainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  height:"22vh",
  // backgroundColor:"red",
}));

const DisplayContainer= styled(Box)(() => ({
  width: "100%",
  display: "flex",
  // height:"12vh",
  // backgroundColor:"red",
}));

const Home = () => {
  return (
    <>
    <Navigation/>
    <Breadcrambcontainer>
    
    <Box sx={{width:"60%",marginLeft:"1rem",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
     <p>Home </p>
    </Box >

    <Box sx={{width:"40%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
    <button style={{height:"3rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"30px",padding: "10px 15px"}}>Add category</button>
    <button style={{height:"3rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"30px",padding: "10px 15px"}}>Add subcategory</button>
    <button style={{height:"3rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"30px",padding: "10px 15px"}}>Add product</button>


    </Box>
    
    </Breadcrambcontainer>
  

      <DisplayContainer>
        <Sidebar/>
        <MainproductContainer/>

      </DisplayContainer>
    
    
    </>
  )
}

export default Home
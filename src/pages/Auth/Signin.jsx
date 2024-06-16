import React from "react";
import { Box, Button, styled,TextField } from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";
import {Link, useNavigate} from "react-router-dom"



const Maincontainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  height: "100vh",
  backgroundColor: "white",
}));

const SubLeftcontainer = styled(Box)(() => ({
  width: "65%",
  height: "100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
  // background:`url(${signup}) no-repeat center center`,
  // backgroundSize: 'cover',
}));

const SubRightcontainer = styled(Box)(() => ({
  width: "35%",
  height: "100vh",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  backgroundColor: "#003F62",
  overflow: "hidden",
  position: "relative",
}));

const Signin = () => {
  const navigate=useNavigate()
  return (
    <>
      <Maincontainer>


        <SubLeftcontainer>  


            <Box sx={{display:"flex",flexDirection:"column"}}>

            <p  style={{color:"#EDA415",fontWeight:"700",fontSize:"3.5rem",textAlign:"center"}}>Sign In to<br/>
              Your Account </p>
              <Box sx={{display:"flex",flexDirection:"column",gap:"2px"}}>


              <Box sx={{display:"flex",backgroundColor:"#F4F8F5",padding:".3rem",gap:".8rem",borderRadius:"2rem"}}> 
            <HiOutlineMail style={{height:"4rem",width:"1.2rem"}} />
            <TextField id="standard-basic" label="Email" variant="standard" InputProps={{ disableUnderline: true }}/>


            </Box>


            <Box sx={{display:"flex",backgroundColor:"#F4F8F5",padding:".3rem",gap:".8rem",borderRadius:"2rem"}}> 
            <GoLock style={{height:"4rem",width:"1.2rem"}}/>
            <TextField id="standard-basic" label="Password" variant="standard" InputProps={{ disableUnderline: true }} />


            </Box>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem",fontWeight:"600"}}>
              <p style={{textDecoration:"Underline"}} >Forgot  password?</p>  

            </Box>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button  sx={{backgroundColor:"#EDA415",width:"90%",borderRadius:"25px",'&:hover': {
          backgroundColor: '#007bff', 
          transition: 'background-color 0.2s ease-in-out', 
        },}} size="large"><span style={{color:"white",letterSpacing:"2px"}}>SIGN IN</span></Button>
            </Box>
              </Box>
            
            </Box>
 

        






        </SubLeftcontainer>

        <SubRightcontainer>
          <div
            style={{
              height: "53rem",
              width: "42rem",
              backgroundColor: "#336581",
              position: "absolute",
              left: "409px",
              top: "-300px",
              transform: "rotate(-45.54deg)",
            }}
          ></div>

          <div
            style={{
              width: "16.92px",
              height: "41.21px",
              backgroundColor: "#336581",
              position: "absolute",
              top: "1.31px",
              left: "201px",
              transform: "rotate(135.59deg)",
            }}
          ></div>

          <div
            style={{
              height: "5rem",
              width: "5rem",
              borderRadius: "50%",
              backgroundColor: "#336581",
              position: "absolute",
              left: "-7%",
              bottom: "64%",
            }}
          ></div>

          <div
            style={{
              width: "16.92px",
              height: "41.21px",
              backgroundColor: "#336581",
              position: "absolute",
              bottom: "35%",
              left: "30%",
              transform: "rotate(135.59deg)",
            }}
          ></div>

          <div
            style={{
              height: "3rem",
              width: "3rem",
              borderRadius: "50%",
              backgroundColor: "#336581",
              position: "absolute",
              left: "47%",
              bottom: "53%",
            }}
          ></div>

          <div
            style={{
              height: "1.5rem",
              width: "1.5rem",
              borderRadius: "50%",
              backgroundColor: "#336581",
              position: "absolute",
              left: "13%",
              bottom: "11%",
            }}
          ></div>

          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              position: "absolute",
              bottom: "25%",
              left: "60%",
              backgroundColor: "#336581",
              transform: "rotate(-45.54deg)",
            }}
          ></div>

          <div
            style={{
              width: "0",
              height: "0",
              borderLeft: "40px solid transparent",
              borderRight: "40px solid transparent",
              borderBottom: "80px solid #336581",
              position: "absolute",
              bottom: "10%",
              left: "32%",
              transform: "rotate(--15.54deg)",
            }}
          ></div>


          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginLeft:"-2.7rem"}}>
            <p style={{color:"white",fontWeight:"700",fontSize:"3.1rem",zIndex:"10"}}><span>Hello Friend!</span></p>

            <p style={{color:"white",fontWeight:"400",fontSize:"1.1rem",fontFamily:"monospace",marginTop:"1rem",textAlign:"center"}}>
                Enter your personal details and <br/>
                   start your journey with us    
            </p>
            <Button onClick={()=>navigate("/register")}   sx={{backgroundColor:"transparent",width:"60%",borderRadius:"25px",border:"2px solid white " ,marginTop:"1.5rem"}} size="large"><span style={{color:"white",letterSpacing:"2px"}}>SIGN UP</span></Button>
          </div>
        </SubRightcontainer>
      </Maincontainer>
    </>
  );
};

export default Signin;

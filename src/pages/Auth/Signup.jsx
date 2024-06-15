import React from 'react'
import {Box,styled,TextField,Button} from "@mui/material"
import signup from "../../assets/signup.png"
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";






const Maincontainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    height:"100vh",
    backgroundColor:"white"
}));

const SubLeftcontainer = styled(Box)(() => ({
    width: "35%",
    height:"100vh",
    background:`url(${signup}) no-repeat center center`,
    backgroundSize: 'cover', 

}));

const SubRightcontainer = styled(Box)(() => ({
    width: "65%",
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"

}));


const Signup = () => {
  return (
    <>
    <Maincontainer>
      
      <SubLeftcontainer> 

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"90%",height:"100vh",gap:"1rem"}}>


            <p  style={{color:"white",fontWeight:"700",fontSize:"3.1rem",marginTop:"-3rem",zIndex:"1000"}}>Welcome Back!</p>

            <p style={{color:"white",fontWeight:"400",fontSize:"1.2rem",fontFamily:"monospace",marginTop:"1rem",textAlign:"center"}}>
                To keep connected with us please <br/>
                login with your personal info
            </p>


           
            <Button  sx={{background:"#003F62",width:"60%",borderRadius:"25px",border:"2px solid white " ,marginTop:"1rem"}} size="large"><span style={{color:"white",letterSpacing:"2px"}}>SIGN IN</span></Button>



            


        </Box>


      </SubLeftcontainer>

      <SubRightcontainer>

        <Box >
            
            <p  style={{color:"#EDA415",fontWeight:"700",fontSize:"3.5rem"}}>Create Account</p>

            <Box sx={{display:"flex",flexDirection:"column",gap:"2px"}}>

            <Box sx={{display:"flex",backgroundColor:"#F4F8F5",padding:".3rem",gap:".8rem",borderRadius:"2rem"}}> 
            <FiUser style={{height:"4rem",width:"1.2rem"}}/>
            <TextField id="standard-basic" label="Name" variant="standard" InputProps={{ disableUnderline: true }} />


            </Box>

            <Box sx={{display:"flex",backgroundColor:"#F4F8F5",padding:".3rem",gap:".8rem",borderRadius:"2rem"}}> 
            <HiOutlineMail style={{height:"4rem",width:"1.2rem"}} />
            <TextField id="standard-basic" label="Email" variant="standard" InputProps={{ disableUnderline: true }}/>


            </Box>


            <Box sx={{display:"flex",backgroundColor:"#F4F8F5",padding:".3rem",gap:".8rem",borderRadius:"2rem"}}> 
            <GoLock style={{height:"4rem",width:"1.2rem"}}/>
            <TextField id="standard-basic" label="Password" variant="standard" InputProps={{ disableUnderline: true }} />


            </Box>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button  sx={{backgroundColor:"#EDA415",width:"90%",borderRadius:"25px",'&:hover': {
          backgroundColor: '#007bff', 
          transition: 'background-color 0.2s ease-in-out', 
        },}} size="large"><span style={{color:"white",letterSpacing:"2px"}}>SIGN UP</span></Button>
            </Box>

            </Box>

        </Box>


      </SubRightcontainer>

      

    </Maincontainer>



    </>
  )
}

export default Signup
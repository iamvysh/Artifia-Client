import React from 'react'
import {Box,styled,TextField,Button} from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  "../styles/sidebar.css"
// import Button from '@mui/material/Button';



const Sidebarcontainer = styled(Box)(() => ({
    width: "25%",
    display: "flex",
    height:"78vh",
    flexDirection:"column",
    // backgroundColor:"red",
    // marginTop:"2rem",
  }));

const Sidebar = () =>{

  return (
    <>
  
   <Sidebarcontainer>
    <Box sx={{marginLeft:"1rem",display:"flex",flexDirection:"column",gap:".5rem"}}>
    <p style={{color:"#003F62",fontWeight:"600",letterSpacing:"1px"}}>Categories</p>
    <p style={{color:"black",fontWeight:"600",fontSize:".9rem"}}>All Categories</p>
    <div>
      <Accordion sx={{boxShadow:"unset !important"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
         <ul style={{listStyle:"none"}}>
            <li><input type="checkbox" name="Hp" id="" style={{marginRight:"10px"}} />Hp</li>
            <li><input type="checkbox" name="Dell" id="" style={{marginRight:"10px"}}  />Dell</li>
         </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
        <ul style={{listStyle:"none"}}>
            <li><input type="checkbox" name="Hp" id="" style={{marginRight:"10px"}} />Hp</li>
            <li><input type="checkbox" name="Dell" id="" style={{marginRight:"10px"}}  />Dell</li>
         </ul>
        </AccordionDetails>
      </Accordion>
    </div>


    </Box>
    </Sidebarcontainer> 
    
    
    
    
    
    </>
  )
}

export default Sidebar
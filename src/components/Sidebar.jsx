import React, { useState,useEffect } from 'react'
import {Box,styled,TextField,Button} from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  "../styles/sidebar.css"
import { fetchCategories,fetchSubCategories} from '../Services/productServices';
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

  const [categories,setCategories]=useState([])
  const [subCategory,setSubCategory]=useState([])
  useEffect(() => {
    const Categories = async () => {
      const res = await fetchCategories();
      setCategories(res?.data?.data);
    };
    Categories();
  }, []);

  useEffect(()=>{
    const Subcategories=async()=>{
     const res=await fetchSubCategories()
     setSubCategory(res?.data?.data)
    }
    Subcategories()
  },[])
  return (
    <>
  
   <Sidebarcontainer>
    <Box sx={{marginLeft:"1rem",display:"flex",flexDirection:"column",gap:".5rem"}}>
    <p style={{color:"#003F62",fontWeight:"600",letterSpacing:"1px"}}>Categories</p>
    <p style={{color:"black",fontWeight:"600",fontSize:".9rem"}}>All Categories</p>
    <div>
      {

        categories.map((item)=>(
          <>
          <Accordion sx={{boxShadow:"unset !important"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {item.category}
        </AccordionSummary>
        <AccordionDetails>
         <ul style={{listStyle:"none"}}>
         {subCategory.filter((subCat) => subCat.category._id === item._id).map((subCat) => (
                      <li key={subCat._id}>
                        <input type="checkbox" name={subCat.subCategory} id="" style={{ marginRight: "10px" }} />
                        {subCat.subCategory}
                      </li>
                    ))}
         </ul>
        </AccordionDetails>
      </Accordion>
          
          </>
        ))
      }
      
      
    </div>


    </Box>
    </Sidebarcontainer> 
    
    
    
    
    
    </>
  )
}

export default Sidebar
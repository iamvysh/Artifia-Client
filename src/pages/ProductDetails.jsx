import React from 'react'
import Navigation from '../components/Navigation'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Data } from '../assets/Data';

import {Box,styled} from "@mui/material"
const Breadcrambcontainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    height:"10vh",
    // backgroundColor:"red",
    padding:"15px 15px"
  }));

const ProductDetails = () => {
  return (
    <>
    <Navigation/>
    <Breadcrambcontainer>
    <Breadcrumbs aria-label="breadcrumb" separator=">">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        
         
        <Typography color="text.primary">product details</Typography>
      </Breadcrumbs>
    
    </Breadcrambcontainer>

    



    
    
    
    </>
  )
}

export default ProductDetails
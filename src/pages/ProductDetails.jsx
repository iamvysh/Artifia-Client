import React,{useState} from 'react'
import Navigation from '../components/Navigation'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Data } from '../assets/Data';
import { FaCheck } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";



import {Box,styled} from "@mui/material"

const Breadcrambcontainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    height:"10vh",
    // backgroundColor:"red",
    padding:"15px 15px"
  }));

  const ProductContainer= styled(Box)(() => ({
    width: "100%",
    display: "flex",
    height:"80vh",
    // backgroundColor:"red",
  }));

const ProductDetails = () => {

  const [quantity, setQuantity] = useState(1);
  const [selectedRam, setSelectedRam] = useState('4 GB');

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleRamChange = (ram) => {
    setSelectedRam(ram);
  };
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

    <ProductContainer>

    <Box sx={{width:"50%",height:'100%',display:"flex",flexDirection:"column",alignItems:"center",gap:".5rem"}}>
      <Box sx={{width:"90%",height:"65%",border:"2px solid #B6B6B6",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={Data[0].image} alt="image" srcset=""  style={{width:"60%"}}/>
      </Box>
      <Box sx={{display:"flex",gap:"1rem"}}>
        <Box sx={{width:"20rem",height:"10rem",border:"2px solid #B6B6B6",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={Data[0].image} alt="image" srcset="" style={{width:"50%"}} />

        </Box>
        <Box sx={{width:"18rem",height:"10rem",border:"2px solid #B6B6B6",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={Data[0].image} alt="image" srcset="" style={{width:"50%"}} />

          </Box>


      </Box>

    </Box>

<Box sx={{width:"50%",height:'100%'}}>
<p style={{color:"#003F62",fontWeight:"500"}}>{Data[0].title}</p>
<p style={{color:"black",fontWeight:"600"}}>${Data[0].price}</p>
<p style={{color:"black",fontWeight:"500"}}>Availability: <span style={{color:"green"}}><FaCheck fill='green' /> In stock</span></p>
<p style={{color:"#5D5D5D",fontWeight:"400"}}>Hurry up only 34 product left in stock!</p>

<div style={{height:"2px",width:"85%",backgroundColor:"#BDBDBD",marginTop:"2rem"}}></div>

<div style={{ display: 'flex', flexDirection: 'column', marginTop:"2rem" }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ marginRight: 8 ,fontWeight:"500"}}>Ram:</span>
        <button
          style={{
            padding: '2px 12px',
            border: '1px solid #ccc',
            borderRadius: 4,
            marginRight: 8,
            backgroundColor: selectedRam === '4 GB' ? '#f0f0f0' : 'transparent',
          }}
          onClick={() => handleRamChange('4 GB')}
        >
          4 GB
        </button>
        <button
          style={{
            padding: '2px 12px',
            border: '1px solid #ccc',
            borderRadius: 4,
            marginRight: 8,
            backgroundColor: selectedRam === '8 GB' ? '#f0f0f0' : 'transparent',
          }}
          onClick={() => handleRamChange('8 GB')}
        >
          8 GB
        </button>
        <button
          style={{
            padding: '2px 12px',
            border: '1px solid #ccc',
            borderRadius: 4,
            backgroundColor: selectedRam === '16 GB' ? '#f0f0f0' : 'transparent',
          }}
          onClick={() => handleRamChange('16 GB')}
        >
          16 GB
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ marginRight: 8,fontWeight:"500" }}>Quantity:</span>
        <button
          style={{
            padding: '1px 12px',
            border: '1px solid #ccc',
            borderRadius: 4,
            marginRight: 8,
            backgroundColor: '#f0f0f0',
          }}
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span style={{ marginRight: 8 }}>{quantity}</span>
        <button
          style={{
            padding: '1px 12px',
            border: '1px solid #ccc',
            borderRadius: 4,
            backgroundColor: '#f0f0f0',
          }}
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '350px' ,alignItems:"center",marginTop:"1rem"}}>
        <button
          style={{
            padding: '12px 24px',
            backgroundColor: '#EDA415',
            color: 'white',
            border: 'none',
            borderRadius: "20px",
            cursor: 'pointer',
          }}
        >
          Edit product
        </button>
        <button
          style={{
            padding: '12px 24px',
            backgroundColor: '#EDA415',
            color: 'white',
            border: 'none',
            borderRadius: "20px",
            cursor: 'pointer',
          }}
        >
          Buy it now
        </button>

        <div style={{height:"2rem",width:"2rem",borderRadius:"50%",backgroundColor:"#EEEEEE",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <IoHeartOutline />

        </div>
        
      </div>
    </div>

 </Box>

    </ProductContainer>

    



    
    
    
    </>
  )
}

export default ProductDetails
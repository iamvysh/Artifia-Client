import React from 'react'
import { Box,styled } from '@mui/material'
import { Data } from '../assets/Data';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




const Maincontainer = styled(Box)(() => ({
    width: "75%",
    display: "flex",
    height:"78vh",
    // backgroundColor:"red",
    // marginTop:"2rem",
    padding:"1% 6%"
  }));
const MainproductContainer = () => {
    const navigate=useNavigate()
  return (
    <>
    <Maincontainer>
        <div className="container">

       <div className="row">
       
        <div className="col-md-4" onClick={()=>navigate("/productdetails")} >
            <div className="card-wrap" style={{padding:"10px",width:"100%",background:"white",border:"2px solid #B6B6B6",borderRadius:"20px"}}>

            <img src={Data[0].image} alt="" style={{width:"100%",objectFit:"cover"}}/>
            <p style={{color:"#003F62",fontWeight:"600"}}>{Data[0].title}</p>
            <p style={{color:"black",fontWeight:"700"}}>${Data[0].price}</p>
            <div className="star-container">
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
          
            </div>
            </div>
        </div>
        <div className="col-md-4" onClick={()=>navigate("/productdetails")} >
            <div className="card-wrap" style={{padding:"10px",width:"100%",background:"white",border:"2px solid #B6B6B6",borderRadius:"20px"}}>

            <img src={Data[0].image} alt="" style={{width:"100%",objectFit:"cover"}}/>
            <p style={{color:"#003F62",fontWeight:"600"}}>{Data[0].title}</p>
            <p style={{color:"black",fontWeight:"700"}}>${Data[0].price}</p>
            <div className="star-container">
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
          
            </div>
            </div>
        </div>
        <div className="col-md-4" onClick={()=>navigate("/productdetails")} >
            <div className="card-wrap" style={{padding:"10px",width:"100%",background:"white",border:"2px solid #B6B6B6",borderRadius:"20px"}}>

            <img src={Data[0].image} alt="" style={{width:"100%",objectFit:"cover"}}/>
            <p style={{color:"#003F62",fontWeight:"600"}}>{Data[0].title}</p>
            <p style={{color:"black",fontWeight:"700"}}>${Data[0].price}</p>
            <div className="star-container">
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
            <FaStar style={{color:"#ACACAC"}} />
          
            </div>
            </div>
        </div>
        
       
    
     </div>
        </div>
    </Maincontainer>
      


    </>
  )
}

export default MainproductContainer
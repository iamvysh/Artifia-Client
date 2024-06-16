import * as React from 'react';
import {Box,styled,TextField,Button} from "@mui/material"
import { LuHeart } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Data } from '../assets/Data';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { GiCancel } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';








const Maincontainer = styled(Box)(() => ({
    width: "100%",
   
    height:"60px",
    backgroundColor:"#003F62",
    position:"relative"
}));


const Navigation = () => {

  const Navigate=useNavigate()
  const handleFocus = (event) => {
    event.target.style.border = 'none'; 
    event.target.style.outline = 'none'; 
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <Box sx={{ width: 350 ,display:"flex",justifyContent:"center"}} role="presentation" onClick={toggleDrawer(false)}  >
     

<div style={{marginTop:"1rem",padding:"10px 15px",}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px',width:"100%",borderBottom:"2px solid #B6B6B6",padding:"5px"}}>
        <div style={{ display: 'flex', alignItems: 'center',gap:"1rem" }}>
          <div style={{border:"2px solid #B6B6B6",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center",height:"5rem",width:"5rem"}}>
           
           <img src={Data[0].image} alt="Product" style={{ width: '80%', marginRight: '10px' }} />
           
           
           </div>

          <div>


            <h6 style={{ marginBottom: '5px' }}>HP AMD Ryzen 3</h6>
            <p style={{ fontSize: '1rem', color: '#007bff' }}>$529.99</p>
            <div style={{ display: 'flex', alignItems: 'center',marginTop:"-10px" }}>
              <span style={{ fontSize: '12px', color: '#ccc' }}>
                ★★★★★
              </span>
            </div>
          </div>
        </div>
        <div style={{ cursor: 'pointer',height:"2rem",width:"2rem",paddingLeft:"26px" }}>
          <span style={{ fontSize: '18px', color: '#ccc' }}><GiCancel />
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px',width:"100%",borderBottom:"2px solid #B6B6B6",padding:"5px" }}>
        <div style={{ display: 'flex', alignItems: 'center',gap:"1rem" }}>
          <div style={{border:"2px solid #B6B6B6",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center",height:"5rem",width:"5rem"}}>
           
           <img src={Data[0].image} alt="Product" style={{ width: '80%', marginRight: '10px' }} />
           
           
           </div>

          <div>


            <h6 style={{ marginBottom: '5px' }}>HP AMD Ryzen 3</h6>
            <p style={{ fontSize: '1rem', color: '#007bff' }}>$529.99</p>
            <div style={{ display: 'flex', alignItems: 'center',marginTop:"-10px" }}>
              <span style={{ fontSize: '12px', color: '#ccc' }}>
                ★★★★★
              </span>
            </div>
          </div>
        </div>
        <div style={{ cursor: 'pointer',height:"2rem",width:"2rem",paddingLeft:"26px" }}>
          <span style={{ fontSize: '18px', color: '#ccc' }}><GiCancel />
          </span>
        </div>
      </div>

    </div>
    </Box>
  );
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
            <LuHeart color='white' onClick={toggleDrawer(true)} />
            <div style={{height:".8rem",width:".8rem",borderRadius:"50%",backgroundColor:"#EDA415",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"-.4rem"}}>   <span style={{fontSize:".7rem",color:"white"}}>0</span></div>
            <p style={{marginLeft:".5rem",color:"white",marginBottom:"0",cursor:"pointer"}} onClick={()=>Navigate("/login")}>sign in</p>

            <HiOutlineShoppingCart color='white' style={{marginLeft:"10px"}} />
            <div style={{height:".8rem",width:".8rem",borderRadius:"50%",backgroundColor:"#EDA415",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"-.4rem"}}>   <span style={{fontSize:".7rem",color:"white"}}>0</span></div>

            <p style={{marginLeft:".5rem",color:"white",marginBottom:"0"}}>cart</p>



            </Box>





          </Box>


        </Box>

    </Maincontainer>
    <Drawer open={open} onClose={toggleDrawer(false) } anchor={"right"}>
        {DrawerList}
      </Drawer>

    
    
    
    </>
  )
}

export default Navigation
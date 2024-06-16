import React,{useState} from 'react'
import Navigation from '../components/Navigation'
import {Box,styled,TextField} from "@mui/material"
import Sidebar from '../components/Sidebar';
import { Data } from '../assets/Data';
import MainproductContainer from '../components/MainproductContainer';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #B6B6B6',
  borderRadius:2,
  boxShadow: 24,
  p: 4,
  
};



const Home = () => {
  
  const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
  const [opensubcategory, setopensubcategory] = React.useState(false);
  const [openProduct, setopenProduct] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOpenSubCategory=()=>setopensubcategory(true)
  const handleCloseSubCategory=()=>setopensubcategory(false)

const handleOpenProduct=()=>setopenProduct(true)
const handleCloseProduct=()=>setopenProduct(false)






  const [title, setTitle] = useState('');
  
 
  const [images, setImages] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleVariantChange = (index, key, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][key] = value;
    setVariants(updatedVariants);
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [...images];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
    <Navigation/>
    <Breadcrambcontainer>
    
    <Box sx={{width:"60%",marginLeft:"1rem",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
     <p>Home </p>
    </Box >

    <Box sx={{width:"40%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
    <button style={{height:"3rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"30px",padding: "10px 15px"}} onClick={handleOpen}>Add category</button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{width:"100%"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2"  sx={{textAlign:"center"}}>
            Add Category
          </Typography>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"1.5rem"}}>
            
          <TextField id="outlined-basic" label="Enter category name" variant="outlined"   />
          </Box>

          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"1rem"}}>

          <button style={{height:"2.4rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"10px",padding: "5px 20px"}}>ADD</button>
    <button style={{height:"2.4rem",backgroundColor:"#FFFFFF",border:"none",color:"black",borderRadius:"10px",padding: "5px 20px",marginLeft:"1rem"}}>DISCARD</button>

          </Box>
          </Box>
        </Box>
      </Modal>
        
    <button style={{height:"3rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"30px",padding: "10px 15px"}} onClick={handleOpenSubCategory}>Add sub category</button>

    <Modal
        open={opensubcategory}
        onClose={handleCloseSubCategory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{width:"100%"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2"  sx={{textAlign:"center"}}>
            Add Sub Category
          </Typography>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"1.5rem",flexDirection:"column"}}>
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
            
          <TextField id="outlined-basic" label="Enter sub category name" variant="outlined" sx={{marginTop:"1rem"}}   />
      </FormControl>
          </Box>

          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"1rem"}}>

          <button style={{height:"2.4rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"10px",padding: "5px 20px"}}>ADD</button>
    <button style={{height:"2.4rem",backgroundColor:"#FFFFFF",border:"none",color:"black",borderRadius:"10px",padding: "5px 20px",marginLeft:"1rem"}}>DISCARD</button>

          </Box>
          </Box>
        </Box>
      </Modal>




    <button style={{height:"3rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"30px",padding: "10px 15px"}} onClick={handleOpenProduct}>Add product</button>

    <Modal
        open={openProduct}
        onClose={handleCloseProduct}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{width:"100%"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2"  sx={{textAlign:"center"}}>
            Add Product
          </Typography>



          <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    >
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >
        <label htmlFor="title" style={{ marginBottom: '5px' }}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={""}
          onChange={handleTitleChange}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
        />
      </div>

      <h3>Variants</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >
       
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '5px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <label  style={{ marginRight: '5px' }}>
                Ram:
              </label>
              <input
                type="text"
               
               
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '3px',
                  width: '80px',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <label  style={{ marginRight: '5px' }}>
                Price:
              </label>
              <input
                type="text"
               
                
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '3px',
                  width: '80px',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <label  style={{ marginRight: '5px' }}>
                QTY:
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <button
                
                  style={{
                    padding: '5px 10px',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                  }}
                >
                  
                </button>
                <input
                  type="text"
                  // id={`quantity-${index}`}
                 
                  style={{
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                    width: '30px',
                    textAlign: 'center',
                  }}
                />
                <button
                 
                  style={{
                    padding: '5px 10px',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                  }}
                >
                  
                </button>
              </div>
            </div>
          </div>
       
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >
        <label  style={{ marginBottom: '5px' }}>
          Sub category:
        </label>
        <select
          id="subCategory"
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
        >
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Asus">Asus</option>
          {/* Add more options here */}
        </select>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >
        <label htmlFor="description" style={{ marginBottom: '5px' }}>
          Description:
        </label>
        <textarea
          id="description"
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            minHeight: '80px',
            resize: 'vertical',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >
        <label  style={{ marginBottom: '5px' }}>
          Upload image:
        </label>
        <input
          type="file"
          id="uploadImage"
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
        />
        <div
          style={{
            display: 'flex',
            marginTop: '10px',
            gap: '10px',
          }}
        >
          
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px',
        }}
      >
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#EDA415',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          ADD
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#FFFFFF',
            color: 'black',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          DISCARD
        </button>
      </div>
    </div>
         

          
          </Box>
        </Box>
      </Modal>


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
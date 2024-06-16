import React,{useState,useEffect} from 'react'
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
import { createCategory, createSubCategory, createproduct, fetchCategories, fetchSubCategories } from '../Services/productServices';
import toast from "react-hot-toast";
import { AiOutlineRight } from "react-icons/ai";



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

  

  const handleOpenSubCategory=()=>setopensubcategory(true)
  const handleCloseSubCategory=()=>setopensubcategory(false)

const handleOpenProduct=()=>setopenProduct(true)
const handleCloseProduct=()=>setopenProduct(false)






  
 
 

  

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



//add category section states & functions

  const [category,setCategory]=useState("")
   
  const handleAddCategory=async(e)=>{
    e.preventDefault();
    if(!category){
      toast.error("Please Fill the fields", {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
      return;
    }
    const Category = {
      category
    }
    const res = await createCategory(Category);

    if (res) {
      setCategory(null);
      setSubCategory('');    }
  }

  //add subCategory section states & functions
  const [Category, setcategory] = useState(null)
  const [categories,setCategories]=useState([])
  const [subCategory,setSubCategory]=useState(null)
  useEffect(() => {
    const Categories = async () => {
      const res = await fetchCategories();
      setCategories(res?.data?.data);
    };
    Categories();
  }, []);
  const handleChange = (event) => {
    setcategory(event.target.value);
  };
 
const handleAddSubCategory=async(e)=>{
  e.preventDefault()
  if (!Category || !subCategory) {
    toast.error("Please Fill the fields", {
      duration: 5000,
      style: {
        borderRadius: "10px",
      },
    });
    return;
  }
  const subcategory={
    subCategory
  }
  const res=await createSubCategory(subcategory,Category)
  if(res){
    setSubCategory(null)
  }
}

//add product state and functions

const [subCategories,setSubCategories]=useState([])
const [title, setTitle] = useState('');
const [Ram,setRam]=useState('')
const [price,setPrice]=useState('')
const [productCategory,setProductCategory]=useState(null)
const [productSubCategory,setProductSubCategory]=useState(null)
const [description,setDescription]=useState('')
const [images, setImages] = useState([]);


const handleTitleChange = (event) => {
  setTitle(event.target.value);
};

const handleImageChange = (event) => {
  const newImages = event.target.files;
  setImages([...images, ...Array.from(newImages)]);

};


const handleProductCreation=async(e)=>{
  e.preventDefault()
  console.log(title,Ram,price,productCategory,productSubCategory,description,images);
 
  const formData = new FormData();
  formData.append("title", title);
  formData.append("ram", Ram);
  formData.append("price", price);
  formData.append("category", category);
  formData.append("description",description)
  // for (let i = 0; i < images.length; i++) {
    formData.append('images', images);
// }
  const res=await createproduct(formData,productSubCategory)

  if(res){
    alert(dshckh)
  }

}

useEffect(()=>{
  const GetSubcategories=async()=>{
   const res=await fetchSubCategories()
   setSubCategories(res?.data?.data)
  }
  GetSubcategories()
},[])

console.log(title,Ram,price,productCategory,productSubCategory,description,images);

  return (
    <>
    <Navigation/>
    <Breadcrambcontainer>
    
    <Box sx={{width:"60%",marginLeft:"1rem",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
     <p style={{fontWeight:"500"}}>Home <AiOutlineRight />
     </p>
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
            
          <TextField id="outlined-basic" label="Enter category name" value={category}  onChange={(e)=>setCategory(e.target.value)} variant="outlined"   />
          </Box>

          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"1rem"}}>

          <button style={{height:"2.4rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"10px",padding: "5px 20px"}} onClick={handleAddCategory}>ADD</button>
    <button style={{height:"2.4rem",backgroundColor:"#FFFFFF",border:"none",color:"black",borderRadius:"10px",padding: "5px 20px",marginLeft:"1rem"}} onClick={(e)=>setCategory('')}>DISCARD</button>

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
          value={Category}
          label="age"
          onChange={handleChange}
        >{
          categories.map((item)=>(
            <MenuItem value={item._id}>{item.category}</MenuItem>

          ))
        }
          
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
            
          <TextField id="outlined-basic" label="Enter sub category name" variant="outlined" sx={{marginTop:"1rem"}}  onChange={(e)=>setSubCategory(e.target.value)}/>
      </FormControl>
          </Box>

          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"1rem"}}>

          <button style={{height:"2.4rem",backgroundColor:"#EDA415",border:"none",color:"white",borderRadius:"10px",padding: "5px 20px"}} onClick={handleAddSubCategory}>ADD</button>
    <button style={{height:"2.4rem",backgroundColor:"#FFFFFF",border:"none",color:"black",borderRadius:"10px",padding: "5px 20px",marginLeft:"1rem"}} onChange={(e)=>setSubCategory('')}>DISCARD</button>

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
          value={title}
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
               onChange={(e)=>setRam(e.target.value)}
               
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
               onChange={(e)=>setPrice(e.target.value)}
                
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
          category:
        </label>
        <select
          id="Category"
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
          value={productCategory}
          onChange={(e)=>setProductCategory(e.target.value)}
          
        >{
          categories.map((item)=>(
            <>
            <option value={item.category}>{item.category}</option>
            </>
          ))
        }
     
        </select>
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
          value={productSubCategory}
          onChange={(e)=>setProductSubCategory(e.target.value)}
        >{
          subCategories.map((item)=>(
            <>
            <option value={item._id}>{item.subCategory}</option>
            </>
          ))
        }
        
        </select>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >
        <label  style={{ marginBottom: '5px' }}>
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
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
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
          onChange={handleImageChange}
          multiple
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
          onClick={handleProductCreation}
        
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
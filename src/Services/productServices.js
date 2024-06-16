import toast from "react-hot-toast";
import axios from "axios";
import { AddSubCategory, Addproduct, addCategory,getCategories, getSubCategories } from "../Axios/productApi";



const baseURL = import.meta.env.VITE_SERVER_URL;

export async function createCategory(categoryData) {
    try {
      const res = await addCategory(categoryData);
      if (res) {
        toast.success("category added successfully", {
          duration: 5000,
          style: {
            borderRadius: "10px",
          },
        });
      }
      return res;
    } catch (error) {
      toast.error(error?.errorMessage || "something went wrong", {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
    }
  }

  export async function fetchCategories() {
    try {
      const res = await getCategories();
      return res;
    } catch (error) {
      toast.error(error?.errorMessage || "something went wrong", {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
    }
  }

  export async function createSubCategory(subcategory,id){
    try {
        const res=await AddSubCategory(subcategory,id)
        if (res) {
            toast.success("sub-category added successfully", {
              duration: 5000,
              style: {
                borderRadius: "10px",
              },
            });
          }
        return res
        
    } catch (error) {
        toast.error(error?.errorMessage || "something went wrong", {
            duration: 5000,
            style: {
              borderRadius: "10px",
            },
          });
    }
  }

  export async function fetchSubCategories(){
    try {
        const res=await getSubCategories()
        return res

    } catch (error) {
        toast.error(error?.errorMessage || "something went wrong", {
            duration: 5000,
            style: {
              borderRadius: "10px",
            },
          });
    }
  }
 export async function createproduct(categoryData,id){
    try {
    console.log(categoryData,"kfbhsadhfghjs");
      
    const formData = new FormData();
    formData.append("title",categoryData.title);
    formData.append("ram",categoryData.ram);
    formData.append("price",categoryData.price);
    formData.append("category",categoryData.productCategory);
    formData.append("description",categoryData.description)
    for (let i = 0; i <categoryData.images.length; i++) {
      formData.append('images',categoryData.images[i]);
   }

      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const res = await axios.post(`${baseURL}/admin/create/product/${id}`, formData, {
      headers,
      });
      if (res) {
        toast.success(res?.data?.message, {
          duration: 5000,
          style: {
            borderRadius: "10px",
          },
        });
      }
      return res;
        
    } catch (error) {
      console.log(error);
        toast.error(error?.errorMessage || "something went wrong", {
            duration: 5000,
            style: {
              borderRadius: "10px",
            },
          });
    }
 }


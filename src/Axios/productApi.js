import axiosInstance from "./axiosConfig";


export const addCategory = (category) => {
    return axiosInstance().post("/admin/create/category", { ...category });
  }

  export const getCategories = () => {
    return axiosInstance().get("/admin/get/category");
  }; 

  export const AddSubCategory=(subcategory,id)=>{
    return axiosInstance().post(`/admin/create/subcategory/${id}`,{...subcategory})
  }

  export const getSubCategories=()=>{
    return axiosInstance().get("/admin/get/subcategory")
  }

  export const Addproduct=(data,id)=>{
    return axiosInstance().post(`/admin/create/product/${id}`,{...data})
  }
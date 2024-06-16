import {login,register} from "../Axios/userApi"
import toast from "react-hot-toast";

export async function userLogin(loginCredentials) {
    try {
      const res = await login(loginCredentials);
      console.log(res);
      if(res.data.type=="user"){

        //   const token = res.data?.data;
        //   localStorage.setItem("accessToken", token);
          const id=res.data?.id;
          localStorage.setItem("userid", id);


      }
      if(res.data.type=="admin"){
        localStorage.setItem("isAdmin",true)
      }
    
      return true
    } catch (error) {
      toast.error(error?.errorMessage, {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
    }
  }


  export async function userRegister(userCredentials) {
    try {
      const res = await register(userCredentials);
      return res;
    } catch (error) {
      toast.error(error?.errorMessage || "Something went wrong", {
        duration: 5000,
        style: {
          borderRadius: "10px",
        },
      });
    }
  }
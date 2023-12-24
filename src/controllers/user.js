import axios from "axios"

import { isAdminAuth } from "./admin";
const API_URL=https://lib-api-t2nm.onrender.com"

export const getCart = (props) =>{
    return axios.get(`${API_URL}/users/book/borrowed/${props.regno}`)
    .then((resp)=>{
       console.log(resp);
    })
    .catch((err)=>{
        console.log(err);
    })
}
export const signIn = (props) =>{
    let to="user";
    if(props.isuser==0){to="admin";}
    
    return  axios.post(`${API_URL}/signin/${to}/`,{
        gmail:props.gmail,
        password:props.password
    })
    .then((resp)=>{
      return resp;
 
    })
    .catch((err)=>{
        console.log(err);
    })

}
export const isUserAuth = () =>{
    let x = JSON.parse(localStorage.getItem("libstudent"));
   
    return x;
}
export const getUser = () =>{
    if(isAdminAuth()){
        return axios.get(`${API_URL}/admin/admin`,{
            
        },
        {
            headers:{Authorization:`Bearer ${isAdminAuth().token}`}
        })
        .then((resp)=>{
            return resp;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return axios.get(`${API_URL}/users/user/${isUserAuth().user.reg_no}`).then((resp)=>{
        return resp;
    })
    .catch((err)=>{
        console.log(err);
    
    })

}
export const updateUser = (obj) =>{
    return axios.put(`${API_URL}/users/update`,{
        obj
    },{headers:{
        Authorization:`Bearer ${isUserAuth().token}`
    }
    
    }).then((resp)=>{
        console.log(resp);
        return resp;
        
    })
    .catch((err)=>{
        console.log(err);
    })
};
export const  createUser = (user) =>{
   
    let isstu ="user";
    if(user.isuser==0){isstu="admin";user.reg_no=undefined;}
    console.log(user);
     return axios.post(`${API_URL}/signup/${isstu}/new`,{
      name:user.name,
      gmail:user.gmail,
      reg_no:user.reg_no,
      password:user.password
     })
     .then((resp)=>{
        return resp;
     })
     .catch((err)=>{
        console.log(err);
     })
}
export const forgotPassword = (data)=>{
    if(data.admin){
        return axios.post(`${API_URL}/forgot/admin/${data.token}`,
        {
           password:data.password
        }
        )
        .then((resp)=>{
            return resp;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    else{
        return axios.post(`${API_URL}/forgot/user/${data.token}`,
        {
            password:data.password
        }
        )
        .then((resp)=>{
            return resp;
        })
        .catch((err)=>{
            console.log(err);
        })  
    }


}

export const forgotPass = (data)=>{
    if(data.admin){
        return axios.post(`${API_URL}/forgot/admin/new/`,
        {
            gmail:data.gmail
        }
        )
        .then((resp)=>{
            return resp;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    else{
        return axios.post(`${API_URL}/forgot/user/new/`,
        {
           gmail:data.gmail
        }
        )
        .then((resp)=>{
            return resp;
        })
        .catch((err)=>{
            console.log(err);
        })  
    }


}

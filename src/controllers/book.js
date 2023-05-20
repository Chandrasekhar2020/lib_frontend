import axios from "axios";
import { isAdminAuth } from "./admin";
const API_URL="https://library-management-eawgfkg0e-chandrasekhar2020.vercel.app"
export const getBooks = ()=>{
   if(isAdminAuth()){
      console.log(isAdminAuth().token);
      return axios.get(`${API_URL}/admin/book`,{
       headers:{ Authorization:`Bearer ${isAdminAuth().token}` }
      }).
      then((resp)=>{
         return resp.data.resp;
      })
   }
   else{
        return  axios.get(`${API_URL}/users/book/`).then((resp)=>{
            return resp.data.resp;

         })
         .catch((err)=>{
            console.log(err);
            return err;
         })
      }
};
export const addBook = (book) =>{
   return axios.post(`${API_URL}/admin/book/`,book,{headers:{Authorization:`Bearer ${isAdminAuth().token}`}}).then((resp)=>{
     
      return resp;
   })
   .catch((err)=>{
      console.log(err);
      return err;
   })

};
export const getBookDetail = (props) =>{
   return axios.get(`${API_URL}/users/book/${props}`).then((resp)=>{
      return resp.data.book;
      
   })
   .catch((err)=>{
      console.log(err);
   })
}
export const BookManage = (book) =>{
  if(book.take==1){
    return axios.put(`${API_URL}/admin/take/${book.ref_no}/${book.reg_no}`,
    {},{headers:{Authorization:`Bearer ${isAdminAuth().token}`}})
    .then((resp)=>{
      return resp;
    })
    .catch((err)=>{
      console.log(err);
    });

  }
  else{
   return axios.put(`${API_URL}/admin/give/${book.ref_no}/${book.reg_no}`,{}
   ,{headers:{Authorization:`Bearer ${isAdminAuth().token}`}})
   .then((resp)=>{
      return resp;
   })
   .catch((err)=>{
      console.log(err);
   });
  }
}
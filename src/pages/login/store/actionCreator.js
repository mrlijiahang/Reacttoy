import axios from 'axios'
import * as actionType from './actionType'

const changeLogin=()=>({
  type:actionType.CHANGE_LOGIN,
  value:true
})
 export const Logout=()=> {return{
  type:actionType.CHANGE_LOGOUT,
  value:false
}}

export const login =(account,password)=>{
  return(dispatch)=>{
    axios.get(`/api/login.json?acconut=${account}password=${password}`).then(res=>{
      const result =res.data.data
      if(result){
        dispatch(changeLogin())
      }else{
        alert('登录失败')
      }
    })
  }

}

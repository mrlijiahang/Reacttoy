import axios from 'axios'
import * as actionType from './actionType'
const changedetail=(title,content)=>({
  type:actionType.CHANGE_DETAIL,
  title,content
})
export const getDetail=()=>{
  return (dispatch)=>{
    axios.get('api/detail.json').then((res)=>{
      dispatch(changedetail(res.data.data.title,res.data.data.content))
    })
  }
}
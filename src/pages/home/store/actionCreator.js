import axios from 'axios'
import * as actionType from './actionType'
import {fromJS} from 'immutable'
 
const changehomedata =(result)=>({
  type:actionType.CHANGE_HOME,
  topList:result.topList,
  articlelist:result.articlelist
})
const gethomedata =(result,nextpage)=>({
  type:actionType.GET_HOME,
  topList:result.topList,
  articlelist:fromJS(result.articlelist),
  articlenextpage:nextpage
})
export const gethomeinfo =()=>{
  return (dispatch)=>{
    axios.get('/api/home.json').then(res=>{
      const result =res.data
      const action = changehomedata(result)
      dispatch(action);
    })
          

  }
}
export const getMoreList=(page)=>{
  return(dispatch)=>{
    axios.get('/api/headerlist.json?page='+page).then(res=>{
      const result =res.data
      const action = gethomedata(result,page+1)
      dispatch(action);
    })
  }
}
export const scrollShow =(show)=>({
  type:actionType.SCROLL_TYPE,
  show
})
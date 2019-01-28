import {fromJS} from 'immutable'
import * as actionType from './actionType'
const defaultState = fromJS({
  title:'1111',
  content:''
})
export default (state=defaultState,action)=>{
  if(action.type === actionType.CHANGE_DETAIL){
    return state.merge({
      title:action.title,
      content:state.get('content')
    })
  }
  return state
}
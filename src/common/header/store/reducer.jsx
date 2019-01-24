import * as actionTypes from './actionType'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  focused: false
})
//导出必须是纯函数
export default (state = defaultState, action) => {
  if (action.type === actionTypes.searchFoucus) {
    return state.set('focused',true)
    // return {
    //   focused: true
    // }
  }
  if (action.type === actionTypes.searchBlur) {
    return state.set('focused',false)
    // return {
    //   focused: false
    // }
  }
  return state

}
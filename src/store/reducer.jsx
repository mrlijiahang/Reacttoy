import { combineReducers } from 'redux'
// import headerReducer from '../common/header/store/reducer'
import {headerReducer} from '../common/header/store'
import  {reducer as homeReducer} from '../pages/home/store'
import {reducer as DetailReducer} from '../pages/detail/store'
import {reducer as LoginReducer} from '../pages/login/store'
export default combineReducers({
  header: headerReducer,
  home:homeReducer,
  detail:DetailReducer,
  login:LoginReducer
})
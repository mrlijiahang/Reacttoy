import {
  fromJS
} from 'immutable'
import * as actionType from './actionType'
const defaultState = fromJS({
  topList: [],
  articlelist: [],
  articlepage: 1,
  scrolltype: false,
  // topList: [{
  //     id: 1,
  //     title: '社会热点'
  //   },
  //   {
  //     id: 2,
  //     title: '奥力给'
  //   }
  // ],
  // articlelist: [{
  //   id: 1,
  //   title: '大排档'
  // }, {
  //   id: 2,
  //   title: '护国小吃'
  // }, {
  //   id: 3,
  //   title: '农大食堂'
  // }]
})
const changeHomeData = (state, action) => {
  return state.merge({
    topList: fromJS(action.topList),
    articlelist: fromJS(action.articlelist)
  })
};
//导出必须是纯函数


export default (state = defaultState, action) => {
  if (action.type === actionType.CHANGE_HOME) {
    return changeHomeData(state, action)
  }
  if (action.type === actionType.GET_HOME) {
    return state.merge({
      articlelist: state.get('articlelist').concat(action.articlelist),
      articlepage: action.articlenextpage
    })
    // return state.set('articlelist',state.get('articlelist').concat(action.articlelist))
  }
  if (action.type === actionType.SCROLL_TYPE) {
    return state.set('scrolltype', action.show)
  }
  return state
}
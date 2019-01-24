import React, { Component } from 'react'
import { ListItem ,LoadMore} from '../style'
import { connect } from 'react-redux'
import {actionCreator} from '../store'
class List extends Component {
  render() {
    const { list ,getMoreList,page} = this.props
    return (
      <div>
        {list.map((item ,index)=> 
         (
            <ListItem key={index}>
              <div className="xixi">{item.get('title')}</div>
              <h3>123</h3>
            </ListItem>
          )
        )}
        <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.home.get('articlelist'),
  page:state.home.get('articlepage')
})
const mapDispatch =(dispatch)=>({
  getMoreList(page){
    dispatch(actionCreator.getMoreList(page))
  }
})

export default connect(mapState,mapDispatch)(List)
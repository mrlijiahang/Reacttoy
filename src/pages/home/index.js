import React, { Component } from 'react'
import { HomeWrapper, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreator } from './store/index'
class Home extends Component {
  render() {
    const { handleScrollTop } = this
    const { scrolltype } = this.props
    return (
      <div>
        <HomeWrapper>
          <Topic></Topic>
          <List></List>
          <Writer></Writer>
        </HomeWrapper>
        {scrolltype ? <BackTop onClick={handleScrollTop}>回到顶部</BackTop> : null}

      </div>
    )
  };
  componentDidMount() {
    this.props.changeHomedata()
    this.bindEvents()
  };
  componentWillUnmount(){
    window.addEventListener('scroll',this.props.changeScrollTop)
  }
  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTop)
  }
}
const mapState = (state) => ({
  scrolltype: state.home.get('scrolltype')
})

const mapDispatch = (dispatch) => ({
  changeHomedata() {
    const action = actionCreator.gethomeinfo()
    dispatch(action)
  },
  changeScrollTop(e){
    if(document.documentElement.scrollTop > 400){
      dispatch(actionCreator.scrollShow(true))
    }else{
      dispatch(actionCreator.scrollShow(false))
    }
  }
})
export default connect(mapState, mapDispatch)(Home)
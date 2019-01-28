import React from 'react'
import { HeaderWraper, Logo, Nav, NavItem, NavSerch } from './style'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
// import {withRouter} from 'react-router-dom'
// import  * as actionCreator from './store/actionCreator'
import { actionCreator } from './store'
import {actionCreator as LoginActionCreators} from '../../pages/login/store'
// 无状态组件
const Header = (props) => {
  return (
    <div>
      <HeaderWraper>
        <Logo href='/' />
        <Nav>
          <Link to="/write">
          <NavItem className='left active'>写文章</NavItem>
          </Link> 
          <Link to='/detail'> <NavItem className='left'>详情页</NavItem></Link>
          {props.login ?  <NavItem className='left' onClick={props.logout}>退出</NavItem>:
          //  <NavItem className='left'>登陆</NavItem> 
          <Link to='/login'><NavItem className='left'>登陆</NavItem> </Link>
          }
          <CSSTransition timeout={200} in={props.focused} classNames="slide">
            <NavSerch className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}>
            </NavSerch>
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60f;</span>
          <NavItem className='right'>
            <span className="iconfont">&#xe623;</span>
          </NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe60f;</span>
          </NavItem>
        </Nav>
      </HeaderWraper>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    login:state.login.get('login')
    // focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.searchFoucus())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur())
    },
    logout(){
      dispatch(LoginActionCreators.Logout())

    }
  }
}
// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)((Header));
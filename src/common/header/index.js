import React from 'react'
import { HeaderWraper, Logo, Nav, NavItem, NavSerch } from './style'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
// import  * as actionCreator from './store/actionCreator'
import { actionCreator } from './store'
// 无状态组件
const Header = (props) => {
  return (
    <div>
      <HeaderWraper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>首页</NavItem>
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
    focused: state.header.get('focused')
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
    }
  }
}
// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
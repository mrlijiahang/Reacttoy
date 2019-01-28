import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { LoginWrapper, Input ,Button} from './style'
import {actionCreator} from './store/index'

class Login extends PureComponent {
  render() {
    if(!this.props.loginstate){
    return (
      <LoginWrapper>
        <Input placeholder="账号" ref={(input)=>{this.account =input}}></Input>
        <Input placeholder="密码" ref={(input)=>{this.password =input}}></Input>
        <Button onClick={()=>this.props.login(this.account,this.password)}>登陆</Button>
      </LoginWrapper>

    )}else{
      return <Redirect to="/"></Redirect>

    }
  }
}

const mapState = (state) => ({
  loginstate:state.login.get('login')
})

const mapDispatch = (dispatch) => ({
  login(account,password){
    dispatch(actionCreator.login(account.value,password.value))
    console.log(account.value)
    console.log(password)

  }

})
export default connect(mapState, mapDispatch)(Login)
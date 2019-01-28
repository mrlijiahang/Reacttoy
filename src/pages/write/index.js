import React ,{Component} from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
class Writer extends Component{
  render(){
    const {loginState} =this.props
    if(loginState){
      return(
        <div>
          写点什么？？
        </div>
      )
    }else{
     return  <Redirect to="/login"></Redirect>

    }

  }
}
const mapState =(state)=>{return{
  loginState:state.login.get('login')
}}
export default connect(mapState,null)(Writer)   
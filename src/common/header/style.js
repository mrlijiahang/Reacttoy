import styled from 'styled-components';
import logopic from '../../statics/logo.jpeg';

export const HeaderWraper = styled.div `
height:58px;
border-bottom:1px solid black
`

export const Logo = styled.a `
position: absolute;
top: 0;
left: 0;
display: block;
width: 100px;
height: 56px;
background: url(${logopic})
`

export const Nav = styled.div `
width:960;
height:100%;
margin:0 auto;
background:green;

`
export const NavItem = styled.div `
line-height:56px;
padding: 0 15px;
&.left{
  float:left;
  margin-left:120px;
}
&.right{
  float:right
}
&.active{
  color:red
}
`
export const NavSerch=styled.input.attrs({
  placeholder:'搜索'
})`
&.slide-enter{
  transition:all .2s ease-out
}
&.slide-enter-active{
  width:300px;
}
&.slide-exit{
  transition:all .2s ease-out
}
&.slide-exit-active{
  width:160px;
}
width:160px;
height: 38px;
padding: 0 35px 0 20px;
margin-top: 9px;
margin-left: 20px;
box-sizing: border-box;
border: none;
outline: none;
border-radius: 19px;
font-size: 14px;
&::placeholder{
  color: #999
}
&.focused{
  width:300px
}
`
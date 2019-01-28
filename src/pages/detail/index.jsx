import React, { Component } from 'react'
import { DetailWrapper } from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Detail extends Component {
  constructor() {
    super()
    this.state = {
      phone: ""
    }
  }
  render() {

    const { title, contant } = this.props
    return (
      <div>
        <DetailWrapper>
          {title}
        </DetailWrapper>
        <p>{contant}</p>
        <input value={this.state.phone} onChange={this.changephone} ref="myInput"></input>
      </div>
    )

  }
  componentDidMount() {
    this.props.getDetail()
    console.log(this.props)

  }
  changephone = () => {
    this.setState({
      phone: this.refs.myInput.value
    })
  }

}
const mapState = (state) => ({
  title: state.detail.get('title'),
  contant: state.detail.get('content')
})
const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreator.getDetail())
  }

})
export default connect(mapState, mapDispatch)(Detail)
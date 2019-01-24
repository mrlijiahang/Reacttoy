import React, { Component } from 'react'
import { TopicWripper, TopItem } from '../style'
import { connect } from 'react-redux'
class Topic extends Component {
  render() {
    const { list } = this.props
    return (
      <TopicWripper>
        {list.map((item) =>
          (
            <TopItem key={item.get('id')}>
              {item.get('title')}
            </TopItem>
          )
        )}
      </TopicWripper>
    )
  }
}
const mapState = (state) => ({
  list: state.home.get('topList')
})
export default connect(mapState, null)(Topic)
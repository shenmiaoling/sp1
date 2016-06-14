import React from 'react'
import Experts from './experts'
module.exports = React.createClass({
  render() {
    return <div className="app">
      {this.props.children}
    </div>
  }
})

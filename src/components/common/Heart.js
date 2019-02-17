import React, { Component } from 'react'

export default class Heart extends Component {

  render() {
    return (
        <label className="heart-toggle-label">
          <input type="checkbox" className="heart-toggle" 
          onChange={this.props.handleCheckBox} 
          checked={this.props.checked}/>
          <i className="fas fa-heart"></i>
        </label> 
    )
  }
}
import React, { Component } from 'react'
import './index.scss'
import defaultState from './defaultState'


export default class Template extends Component {
  constructor (props) {
    super(props)
    this.state = { ...defaultState }
  }

  render() {
    const { } = this.props;
    return;
  }
}

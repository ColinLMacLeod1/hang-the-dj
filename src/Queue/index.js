import React, { Component } from 'react';
import QueueItem from './QueueItem';
import './index.scss';
import defaultState from './defaultState';


export default class Queue extends Component {
  constructor (props) {
    super(props)
    this.state = { ...defaultState }
  }

  render() {
    const { queue } = this.props;
    return (
      <div className='queue-container'>
        <div className='queue-title'>Up next:</div>
        {queue.map((item, index)=>( <QueueItem track={item} key={index}/> ))}
      </div>
    )
  }
}

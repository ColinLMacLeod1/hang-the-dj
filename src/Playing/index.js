import React, { Component } from 'react'
import './index.scss'

export default class Playing extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { playing } = this.props;
    console.log(playing)
    return (
      <div className='playing-container'>
        <img src={playing.album.images[1].url} alt='Album Cover' className="playing-cover"/>
        <div className='playing-title'>{playing.name}</div>
        <div className='playing-album'>{playing.album.name}</div>
        <div className='playing-artist'>{playing.artists[0].name}</div>
      </div>
    )
  }
}

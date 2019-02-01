import React, { Component } from 'react';
import spotifyWebAPI from 'spotify-web-api-js';

import logo from './logo90.png';
import './App.scss';
import Header from './Header';
import Playing from './Playing';
import Queue from './Queue';

import defaultState from './defaultState'

const Spotify = new spotifyWebAPI()
Spotify.setAccessToken(process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN)

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { ...defaultState }
  }

  componentDidMount() {
    const searchReq = Spotify.searchTracks('freak after funk', {limit: 5})
    searchReq.then((data) => {
      console.log("RESPOSNE", data)
      this.setState({
          playing: data.tracks.items[0]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <div className='app-body'>
          <Playing playing={this.state.playing}/>
          <Queue queue={this.state.queue} />
        </div>
      </div>
    );
  }
}

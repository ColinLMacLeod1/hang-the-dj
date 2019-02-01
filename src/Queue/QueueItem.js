import React from 'react';

const QueueItem = ({ track }) => (
  <div className='queue-item'>
    <img src={track.album.images[1].url} alt='Album Cover' className="track-cover"/>
    <div className='track-title track-text'>{track.name}</div>
    <div className='track-album track-text'>{track.album.name}</div>
    <div className='track-artist track-text'>{track.artists[0].name}</div>
  </div>
)

export default QueueItem;

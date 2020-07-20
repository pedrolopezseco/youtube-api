import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="videoItem">
      <div onClick={() => onVideoSelect(video)}>
        <img
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url} />
        <div><b>{video.snippet.title}</b></div>
      </div>
    </div>
  )
}

export default VideoItem;
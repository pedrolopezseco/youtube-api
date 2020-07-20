import React from 'react';

const VideoDetail = ({ videos }) => {
  if (!videos) return <div>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${videos.id.videoId}`

  return (
    <div className="videoDetail">
      <div className="video">
        <iframe frameBorder='0' height='100%' width='100%' title='VideoPlayer' src={videoSrc} />
      </div>
      <div className="videoDescription">
        <div className="title">{videos.snippet.title}</div>
        <div className="channel">{videos.snippet.channelTitle}</div>
        <div className="description">{videos.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
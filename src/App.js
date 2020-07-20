import React from 'react';
import { SearchBar, VideoDetail, VideoList } from './components';
import youtube from './api/youtube';
import './App.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('')
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDw2J1hzNezGkMyYiIx_0xrq36nOlRi0fo',
        q: searchTerm,
      }
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[1] });
    console.log(this.state.videos);
  }

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <div className="container">
          <SearchBar onFormSubmit={this.handleSubmit} />
          <VideoDetail videos={selectedVideo} />
          <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
      </div>
    )
  }
}

export default App;
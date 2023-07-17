import React, { Component } from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";


class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }
  handleFormSubmit = async (searchTerm) => {
    const response = await youtube.get('search',{
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAvq69ebCWTkIOntSEQHZGavijBocoo6Fk',
        q: searchTerm
    }
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})
  }
  async componentDidMount() {
    this.handleFormSubmit('youtube');
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col ">
            <SearchBar onFormSubmit={this.handleFormSubmit}/>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-8">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-4">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

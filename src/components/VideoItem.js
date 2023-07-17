import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="d-flex" onClick={() => onVideoSelect(video)}>
            <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} height='100px' width='300px' />
            <p className="ps-2"><strong>{video.snippet.title.slice(0, 65)}...</strong></p>
        </div>
    )
}

export default VideoItem
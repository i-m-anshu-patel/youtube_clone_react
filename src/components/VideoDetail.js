import React, { Component } from "react";
const VideoDetail = ({ video }) => {
    if (!video) return <div> Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    console.log(video);
    return (
        <div className="embed-responsive embed-responsive-16by9 mt-3">
            <iframe height="400px" width="100%" className="embed-responsive-item" src={videoSrc} allowFullScreen />
            <div className="mt-2">
                <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
                <p>{video.snippet.channelTitle}</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )

}
export default VideoDetail;

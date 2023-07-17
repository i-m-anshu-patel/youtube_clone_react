import React, { Component } from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    return (
            <div className="p-2">
                {videos.map((video, id) => {
                    return <div className="mt-2">
                        <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />
                    </div>
                })}
            </div>
    )
}


export default VideoList
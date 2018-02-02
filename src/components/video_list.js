import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // Need to provide key for each elements in the list 
        // so React don't need to update the entire list when something have changed
        // An 'etag' is a property in video Object gathered from youtube.
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
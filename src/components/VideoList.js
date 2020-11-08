import React from 'react';

import {Grid} from '@material-ui/core';
import VideoItem from './VideoItems';


const VideoList = ({ videos,onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>)
    return (
        <Grid container spacing={4}>
            {listOfVideos}
        </Grid>
        
    )
}

export default VideoList;
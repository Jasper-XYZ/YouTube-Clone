import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography varient="h4"><b>{video.snippet.title} - {video.snippet.channelTitle}</b></Typography>
                <Typography varient="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography varient="subtitle2">{video.snippet.description}</Typography>
            </Paper>

        </React.Fragment>
    )
}

export default VideoDetail;
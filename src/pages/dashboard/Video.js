import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            background: '#FAFAFA',
            width: '100%'
        }
    }
})

function Video(props) {
    
    const classes = useStyles()

    return (
        <div className = {classes.root}>
            Video
        </div>
    );
}

export default Video;
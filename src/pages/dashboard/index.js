import React,{useEffect, useState} from 'react';
import openSocket from 'socket.io-client';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            margin: '0%',
        },
        counting: {
        },
        counting_head:{
            fontSize: '1.5rem',
            fontWeight: '300',
            margin: '0 0 0 1rem'
        },
        environment: {

        },
        graphs: {

        }
    }
})


export default function Dashboard(props) {

    const [peds,setPeds] = useState("");
    const [bikes,setBikes] = useState("");
    const [cars,setCars] = useState("");

    useEffect(()=>{
        const socket = openSocket('http://localhost:5000')
        socket.on('datas', data => {
            if(data.action === 'messages'){
                setCars(data.message)
                setPeds(data.message)
                setBikes(data.message)
                console.log(data.message)
            }
        })
    })

    const classes = useStyles()



    return(
        <div className = {classes.root}>
            <div className={classes.counting}>
                <div className={classes.counting_head}>Counting</div>
                <Box display="flex" flexDirection="row" bgcolor="white" m={2}>
                    <Box display="flex" flexDirection="column" p={4} >
                        <Box>Pedestrians/hr {peds}</Box>
                        <Box>Bikes/hr {bikes} </Box>
                        <Box>Cars/hr {cars} </Box>
                    </Box>
                    <Box><iframe src="https://seekopath.github.io" /></Box>
                    <Box><iframe src="https://seekopath.github.io" /></Box>
                    <Box><iframe src="https://seekopath.github.io" /></Box>
                </Box>
            </div>
            <div className={classes.counting}>
                <div className={classes.counting_head}>Environment</div>
                <Box display="flex" flexDirection="row" bgcolor="white" m={2}>
                    <Box display="flex" flexDirection="column" p={4} >
                        <Box>PM2.5/hr </Box>
                        <Box>ppm/hr </Box>
                        <Box>°C/hr </Box>
                    </Box>
                    <Box><iframe src="https://seekopath.github.io" /></Box>
                    <Box><iframe src="https://seekopath.github.io" /></Box>
                    <Box><iframe src="https://seekopath.github.io" /></Box>
                </Box>
            </div>
        </div>
    )
}
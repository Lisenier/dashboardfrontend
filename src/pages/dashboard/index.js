import React,{useEffect, useState} from 'react';
import openSocket from 'socket.io-client';
import { Badge, IconButton, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Areachart from './components/areachart';
import Barchart from './components/barchart';
import Map1 from './../../maps/map1';
import Map2 from './../../maps/map2';
import Map3 from './../../maps/map3';
import Map4 from './../../maps/map4';
import Map5 from './../../maps/map5';
import Map6 from './../../maps/map6';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
            margin: '3%',
        },
        counting: {
        },
        counting_head:{
            fontSize: '1.5rem',
            fontWeight: '300',
            margin: '0 0 0 4rem'
        },
        counting_body:{
            borderRadius: '2rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        counting_body_content: {
            borderRadius: '2rem',
            display: 'flex',
            flexDirection: 'column'
        },
        counting_heading: {
            color: 'grey',
            fontSize: '0.8rem',
            textAlign: 'center',
        },
        counting_headings: {
            fontWeight: '700',
            fontSize: '1.5rem',
        },
        environment: {

        },
        graphs: {

        },
        badges: {
            // color: theme.palette.tertiary,
            // background: theme.palette.tertiary,
            color: "white",
        }
    }
})


export default function Dashboard(props) {

    const [peds,setPeds] = useState("10");
    const [bikes,setBikes] = useState("20");
    const [cars,setCars] = useState("30");
    const [pm,setPm] = useState("40");
    const [ppm,setPpm] = useState("50");
    const [cotwo,setCotwo] = useState("60");

    useEffect(()=>{
        // const socket = openSocket('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']})
        // socket.on('datas', data => {
        //     if(data.action === 'messages'){
        //         setPeds(data.message)
        //         console.log(data.message)
        //     }
        //     else if(data.action === 'messages2'){
        //         setBikes(data.message)
        //         console.log(data.message)
        //     }
        //     else  if(data.action === 'messages3'){
        //         setCars(data.message)
        //         console.log(data.message)
        //     }
        //     else  if(data.action === 'mapdata'){
        //         console.log(data.message)
        //     }
        // })
    },[])

    const classes = useStyles()

    return(
        <div className = {classes.root}>
            <div className={classes.counting}>
                <div className={classes.counting_head}>Counting</div>
                <Box className={classes.counting_body} display="flex" flexDirection="row" bgcolor="white" m={2}>
                    <Box className={classes.counting_body_content} display="flex" flexDirection="column" p={4} >
                        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <img src="assets/walk.png" width="49px" height="25px" />
                                <Typography className={classes.counting_headings} style={{textAlign: 'center'}} >{peds}</Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography className={classes.counting_heading}>Pedestrians/hr</Typography>
                                <img src="assets/barchart1.png" width="112px" height="30px" />
                            </Box>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <img src="assets/cycle.png" width="25px" height="25px" />
                                <Typography className={classes.counting_headings} style={{textAlign: 'center'}} >{bikes}</Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography className={classes.counting_heading}>Bikes/hr</Typography>
                                <img src="assets/barchart2.png" width="112px" height="30px" />
                            </Box>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <img src="assets/cars.png" width="33px" height="25px" />
                                <Typography className={classes.counting_headings} style={{textAlign: 'center'}} >{cars}</Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography className={classes.counting_heading}>Cars/hr</Typography>
                                <img src="assets/barchart3.png" width="112px" height="30px" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.counting_body_content}><Map1 /></Box>
                    <Box className={classes.counting_body_content}><Map2 /></Box>
                    <Box className={classes.counting_body_content}><Map3 /></Box>
                    <Box style={{textAlign: 'center'}}>
                        <Box>
                            <IconButton >
                                <Badge badgeContent={4} className={classes.badges}  color="error">
                                    <img src="assets/walk.png" width="49px" height="25px"  color="secondary" />
                                </Badge>
                            </IconButton> 
                        </Box>
                        <Box>
                            <IconButton >
                                <Badge badgeContent={4} className={classes.badges}  color="error">
                                    <img src="assets/cycle.png" width="25px" height="25px"  color="secondary" />
                                </Badge>
                            </IconButton> 
                        </Box>
                        <Box>
                            <IconButton >
                                <Badge badgeContent={4} className={classes.badges}  color="error">
                                    <img src="assets/cars.png" width="33px" height="25px"  color="secondary" />
                                </Badge>
                            </IconButton> 
                        </Box>
                    </Box>
                </Box>
            </div>
            <div className={classes.counting}>
                <div className={classes.counting_head}>Environment</div>
                <Box className={classes.counting_body} display="flex" flexDirection="row" bgcolor="white" m={2}>
                    <Box className={classes.counting_body_content} display="flex" flexDirection="column" p={4} >
                        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <img src="assets/pm.png" width="47px" height="25px" />
                                <Typography className={classes.counting_headings} style={{textAlign: 'center'}} >{pm}</Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography className={classes.counting_heading}>PM2.5/hr</Typography>
                                <img src="assets/barchart4.png" width="112px" height="30px" />
                            </Box>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <img src="assets/cotwo.png" width="25px" height="25px" />
                                <Typography className={classes.counting_headings} style={{textAlign: 'center'}} >{ppm}</Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography className={classes.counting_heading}>ppm/hr</Typography>
                                <img src="assets/barchart5.png" width="112px" height="30px" />
                            </Box>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <img src="assets/temp.png" width="25px" height="25px" />
                                <Typography className={classes.counting_headings} style={{textAlign: 'center'}} >{cotwo}</Typography>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography className={classes.counting_heading}>°C/hr</Typography>
                                <img src="assets/barchart6.png" width="112px" height="30px" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.counting_body_content}><Map4 /></Box>
                    <Box className={classes.counting_body_content}><Map5 /></Box>
                    <Box className={classes.counting_body_content}><Map6 /></Box>
                    <Box style={{textAlign: 'center'}}>
                        <Box>
                            <IconButton >
                                <Badge badgeContent={4} className={classes.badges}  color="error">
                                    <img src="assets/pm.png" width="47px" height="25px"  color="secondary" />
                                </Badge>
                            </IconButton> 
                        </Box>
                        <Box>
                            <IconButton >
                                <Badge badgeContent={4} className={classes.badges}  color="error">
                                    <img src="assets/cotwo.png" width="25px" height="25px"  color="secondary" />
                                </Badge>
                            </IconButton> 
                        </Box>
                        <Box>
                            <IconButton >
                                <Badge badgeContent={4} className={classes.badges}  color="error">
                                    <img src="assets/temp.png" width="25px" height="25px"  color="secondary" />
                                </Badge>
                            </IconButton> 
                        </Box>
                    </Box>
                </Box>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Box bgcolor="white" m={2} style={{borderRadius: '2rem', padding: '2rem',flexGrow: '1'}}>
                    <Areachart />
                </Box>
                <Box bgcolor="white" m={2} style={{borderRadius: '2rem', padding: '2rem', flexGrow: '1'}}>
                    <Barchart />
                </Box>
            </div>
        </div>
    )
}
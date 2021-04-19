import { Badge, Box, Divider, Grid, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import openSocket from 'socket.io-client';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            background: '#FAFAFA',
            width: '100%',
            margin: '2rem',
        },
        counting: {
            fontSize: '1.5rem',
            fontWeight: '300',
            margin: '0 0 1rem 1rem'
        },
        couniting_map: {
            borderRadius: '2rem',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 'auto'
        }
    }
})

function Counting(props) {

    const classes = useStyles()

    // useEffect(()=>{
    //   const socket = openSocket('http://localhost:5000')
    //   socket.on('datas', data => {
    //       if(data.action === 'messages'){

    //       }
    //   })
    // })

    return (
        <div className = {classes.root}>
            <div className = {classes.counting}>Counting</div>
            <Box bgcolor="white" style={{display: 'flex', flexDirection: 'row', borderRadius: '2rem', padding: '2rem'}}>
                <Box style={{display: 'flex', flexDirection: 'column', width:'134%'}}>
                    <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <DirectionsWalkIcon fontSize="large" />
                                </Badge>
                            </IconButton>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography>Pedestrians/hr</Typography>
                                <Typography>1</Typography>
                            </Box>
                            <Box><img src="assets/barchart1.png" width="104spx" height="40px" /></Box>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <DirectionsBikeIcon fontSize="large" />
                                </Badge>
                            </IconButton>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography>Bikes/hr</Typography>
                                <Typography>1</Typography>
                            </Box>
                            <Box><img src="assets/barchart1.png" width="104spx" height="40px"  /></Box>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <DriveEtaIcon fontSize="large" />
                                </Badge>
                            </IconButton>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography>Cars/hr</Typography>
                                <Typography>1</Typography>
                            </Box>
                            <Box><img src="assets/barchart1.png" width="104spx" height="40px"  /></Box>
                        </Box>
                    </Box>
                    <Box className={classes.counting_map}><iframe style={{borderRadius:'2rem',width: '100%', height: '50vh'}} src="https://seekopath.github.io" /></Box>
                </Box>
                <Box>
                <Grid container style={{marginLeft:"3%",boxShadow: "0px 0px 25px -10px rgba(0,0,0,0.75)",height:"fit-content",width:'50%'}} >
                <Grid item md={12} sm={12}>
                  <ListItem button>
                    <ListItemIcon>
                      <ReportProblemOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="ALERTS Last 24h" />
                  </ListItem>
                  <Divider />
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}}>
                  <img src="assets/fall.png" width="29px" height="26px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Fall Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                      <Typography >Location 59.121212  Time 07:17:54</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}}>
                  <img src="assets/lying.jpeg" width="35px" height="20px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Lying on street Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <Typography >Location 59.121212  Time 07:17:54</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}} >
                  <img src="assets/bicycle.png" width="32px" height="32px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Pedestrian hit by bike Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <Typography >Location 59.121212  Time 07:17:54</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}}>
                  <img src="assets/fall.png" width="29px" height="26px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Fall Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <Typography >Location 59.121212  Time 07:17:54</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}}>
                  <img src="assets/car.jpg" width="40px" height="25px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Pedestrian hit by car Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <Typography >Location 59.121212  Time 07:17:54</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Typography style={{ display: "flex",flexDirection: "row",alignSelf: "center",alignItems: "center", justifyContent: "center",marginTop:"90%" }}>
                    See All
                  </Typography>
                </Grid>
              </Grid>
                </Box>
            </Box>
        </div>
    );
}

export default Counting;
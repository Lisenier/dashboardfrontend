import { Badge, Box, Divider, Grid, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";

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

function Environment(props) {

    const classes = useStyles()

    return (
        <div className = {classes.root}>
            <div className = {classes.counting}>Environment</div>
            <Box bgcolor="white" style={{display: 'flex', flexDirection: 'row', borderRadius: '2rem', padding: '2rem'}}>
                <Box style={{display: 'flex', flexDirection: 'column',width:'134%'}}>
                    <Box style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly'}}>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <img src="assets/pm.png" width="50px" height="32px" />
                                </Badge>
                            </IconButton>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography>PM 2.5/hr</Typography>
                                <Typography>1</Typography>
                            </Box>
                            <Box><img src="assets/barchart4.png" width="104spx" height="40px" /></Box>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <img src="assets/pm.png" width="32px" height="32px" />
                                </Badge>
                            </IconButton>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography>ppm/hr</Typography>
                                <Typography>1</Typography>
                            </Box>
                            <Box><img src="assets/barchart5.png" width="104spx" height="40px"  /></Box>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <img src="assets/temp.png" width="34px" height="34px" />
                                </Badge>
                            </IconButton>
                            <Box style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography>°C/hr</Typography>
                                <Typography>1</Typography>
                            </Box>
                            <Box><img src="assets/barchart6.png" width="104spx" height="40px"  /></Box>
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
                  <img src="assets/cotwo.png" width="29px" height="26px"/>
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
                  <img src="assets/pm.png" width="32px" height="32px"/>
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
                  <img src="assets/pm.png" width="32px" height="32px"/>
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
                  <img src="assets/pm.png" width="32px" height="32px"/>
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
                  <img src="assets/cotwo.png" width="29px" height="26px"/>
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

export default Environment;
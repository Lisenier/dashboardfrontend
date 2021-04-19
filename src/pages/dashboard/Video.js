import { Badge, Box, Divider, Grid, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
          },
    }
})

function Video(props) {
    
    const classes = useStyles()
    const [days, setDays] = React.useState('');

    const handleChange = (event) => {
      setDays(event.target.value);
    };
    const [location, setLocation] = React.useState('');

    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    return (
        <div className = {classes.root}>
            <div className = {classes.counting}>Video</div>
            <Box bgcolor="white" style={{display: 'flex', flexDirection: 'row', borderRadius: '2rem', padding: '2rem'}}>
                <Box style={{display: 'flex', flexDirection: 'column', width:'134%'}}>
                    <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',marginBottom:'2rem'}}>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <FormControl>
                            <InputLabel id="demo-simple-select-label">Select days</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={days}
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Last 10 days</MenuItem>
                            <MenuItem value={20}>Last 20 days</MenuItem>
                            <MenuItem value={30}>Last 30 days</MenuItem>
                            </Select>
                            </FormControl>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Select location</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={location}
                                onChange={handleLocationChange}
                                >
                                <MenuItem value={10}>Delhi</MenuItem>
                                <MenuItem value={20}>Mumbai</MenuItem>
                                <MenuItem value={30}>Bangalore</MenuItem>
                                </Select>
                        </FormControl>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <form className={classes.container} noValidate>
                                <TextField
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                        </Box>
                    </Box>
                    <Box className={classes.counting_map}><iframe width="100%" height="600" src="https://www.youtube.com/embed/wqctLW0Hb_0?controls=0&autoplay=1"   allowfullscreen></iframe></Box>
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

export default Video;
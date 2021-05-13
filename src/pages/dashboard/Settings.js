import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
            height: '91vh',
        },
        settings_head: {
            fontSize: '1.5rem',
            fontWeight: '300',
            margin: '2rem 0 0 4rem',
            font: 'Avenir'
        },
        settings_body:{
            borderRadius: '1rem'
        },
        settings_body_head: {
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '1.5rem',
        },
        settings_body_options: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1rem 0'
        }
    }
})

function Settings(props) {

    const classes = useStyles()
    const handlechange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }
    const [state, setState] = React.useState({
        checkedA: true,
      });

    return (
        <div className = {classes.root}>
            <div className={classes.settings_head}>Settings</div>
            <Box className={classes.settings_body} display="flex" flexDirection="column" bgcolor="white" m={2} p={2} >
                <Box className={classes.settings_body_head}>Modules</Box>
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            People Counting
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                        Detects the number of people that move thru a video frame. Visualize the number of people on an 
                        interactive map so it is possible to see the different people flows and where and when people are moving. 
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            Bicycle Counting
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                    Detects the number of bikes that move thru a video frame. Visualize the number of bikes on an 
interactive map so it is possible to see the different bike flows and where and when bikes are moving. 
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            Car Counting
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                    Detects the number of cars that move thru a video frame. Visualize the number of cars on an 
interactive map so it is possible to see the different car flows and where and when cars are moving. 
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            PM 2.5
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                    Detects the PM2.5 and PM10 particles. Visualize the amount of particles on an
interactive heat map so it is possible to see the ug / m3 amount thru the city.
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            CO2
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                    Analyze the amount of CO2 from vehicles. Visualize the CO2 amount on an
interactive heat map so it is possible to see the CO2 amount thru the city.
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            Temp
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                    Reads the temperature. Visualize thetemperature on an
interactive heat map so it is possible to see the temperature thru the city. 
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            Fall Detection
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                    Detects if a person falls. Visualize location and time of the fall on a
interactive map so it is possible to see the the frequency and the locations of falls in the city.
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            Car Accident
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                    Detects car accidents. Visualize location and time of the accident on a
interactive map so it is possible to see the the frequency and the locations of car accidents in the city.
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
                <Box className={classes.settings_body_options} display="flex" flexDirection="row" >
                    <img src="assets/walk.png"  width="49px" height="25px" ></img>
                    <Box display="flex" flexDirection="column" style={{justifyContent:'center'}} >
                        <Switch
                            checked={state.checkedA}
                            onChange={handlechange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'tertiary checkbox' }}
                        />
                        <Typography style={{fontWeight: '700', fontSize: '1rem',width:'10rem',textAlign: 'left'}}>
                            Bike Accident
                        </Typography>
                    </Box>
                    <Typography style={{fontWeight: '400', fontSize: '1rem', color:'grey', width: '60rem'}}>
                    Detects bike accidents. Visualize location and time of the accident on a
interactive map so it is possible to see the the frequency and the locations of bike accidents in the city. 
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'#FECB2E', display:'flex',flexDirection: 'row',justifyContent: 'end'}}>
                        $1.73
                    </Typography>
                    <Typography style={{fontWeight: '700', fontSize: '1rem', color:'grey',width:'17rem',textAlign: 'center'}}>
                        PER CAMERA, MONTH
                    </Typography>
                    <SettingsIcon />
                </Box> 
            </Box>
        </div>
    );
}

export default Settings;
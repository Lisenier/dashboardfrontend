import { Badge, Divider, Drawer, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory, useLocation } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LanguageIcon from '@material-ui/icons/Language';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import PublicIcon from '@material-ui/icons/Public';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SettingsIcon from '@material-ui/icons/Settings';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import BarChartIcon from '@material-ui/icons/BarChart';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: 'f9f9f9',
            width: '100%'
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex',
            backgroundColor: '#FAFAFA'
        },
        logosidedrawer: {
            height: '85px',
            width: '200px'
        },
        active: {
            background: '#f4f4f4'
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        blank:{
            flexGrow: '1',
            // marginLeft: '62%'
        },
        badges: {
            color: theme.palette.tertiary,
            background: theme.palette.tertiary,
        }
    }

})

function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const firstname = localStorage.getItem("firstname")

    const menuItems = [
        {
            text: 'Dashboard',
            path: '/',
            icon: <DesktopMacIcon />
        },
        {
            text: 'Counting',
            path: '/counting',
            icon: <VerticalSplitIcon />
        },
        {
            text: 'Environment',
            path: '/environment',
            icon: <BarChartIcon />
        },
        {
            text: 'Connectivity',
            path: '/connectivity',
            icon: <PublicIcon />
        },
        {
            text: 'Safety',
            path: '/safety',
            icon: <VerifiedUserIcon />
        },
        {
            text: 'Video',
            path: '/video',
            icon: <VideoLabelIcon />
        },
    ]

    return (
        <div className={classes.root}>
            <AppBar
            className= {classes.appbar}
            position = 'fixed'
            elevation= {0}
            color='inherit'
            >
                <Toolbar>
                    <Typography className={classes.blank}>
                    </Typography>
                    <Typography>
                        Hello ,{firstname}
                    </Typography>
                    <Divider variant="middle" component="div" orientation= 'vertical' flexItem></Divider>
                    <IconButton color="secondary">
                        <LanguageIcon/>
                    </IconButton>     
                    <IconButton color="secondary">
                        <QuestionAnswerIcon/>
                    </IconButton>     
                    <IconButton >
                        <Badge badgeContent={4} className={classes.badges}>
                            <NotificationsIcon color="secondary" />
                        </Badge>
                    </IconButton>     
                    <IconButton color="secondary">
                        <ExitToAppIcon/>
                    </IconButton>     
                </Toolbar>
            </AppBar>
            <Drawer
             className = {classes.drawer}
             variant= "permanent"
             anchor="left"
             classes = {{ paper: classes.drawerPaper}}
            >
                <div>
                    <img src="assets/image14.png" className = {classes.logosidedrawer} />
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                         button
                         key={item.text}
                         onClick = {() => history.push(item.path)}
                         className = {location.pathname == item.path ? classes.active : null}
                        >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                        <Divider></Divider>
                        <ListItem
                         button
                         key={'Settings'}
                         onClick = {() => history.push('/settings')}
                         className = {location.pathname == '/settings' ? classes.active : null}
                        >
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                            <ListItemText primary={'Settings'} />
                        </ListItem>
                </List>
            </Drawer>
            <div>
                <div className = {classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
}

export default Layout;
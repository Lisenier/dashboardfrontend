import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            height: '100vh',
        },
        imagepage: {
            background: '#FAFAFA',
            backgroundImage: 'url(assets/image.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectFit: 'contain',
            width: '100%',
        },
        formpage: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: theme.spacing(8, 4),
            alignItems: 'center',
            justifyContent: 'center',
        },
        imagelogo: {
            width: '161px',
            height: '72px',
            objectFit: 'contain',
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
        },
    }
})

function Forgot(props) {

    const [email,setEmail] = useState("")
    const classes = useStyles()

    return (
        <div className = {classes.root}>
            <div className = {classes.imagepage} />
            <div className = {classes.formpage}>
                <img src="assets/logo.png" className = {classes.imagelogo} />
                <Typography style={{color: '#BDBEC4'}}>Enter your email and we send you a password reset link.</Typography>
                <TextField fullWidth autofocus style={{margin:'2rem 4rem', width: '60%'}} id="standard-basic" onChange={(e) =>{setEmail(e.target.value)}} value={email} label="Email" />
                <div className={classes.buttons}>
                    <Button style={{padding: '1rem 4rem',color: 'white', backgroundColor: '#43425D'}} variant="contained" color="secondary">
                        Send Request
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default Forgot;
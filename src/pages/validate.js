import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../App';

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

function Validate(props) {

    const [code,setCode] = useState("")
    const classes = useStyles()
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)

    const Validation = ()=>{
        var email = localStorage.getItem("email")
        fetch("http://localhost:5000/api/validate",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                code,
                email
            })
        })
        .then(res=>res.json())
        .then(data=>{
                if(data.error){
                    alert(data.error)
                }else{
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("firstname", data.firstname)
                    dispatch({type:"USER",payload:email})
                    history.push('/')
                }
        })
        
    }

    return (
        <div className = {classes.root}>
            <div className = {classes.imagepage} />
            <div className = {classes.formpage}>
                <img src="assets/logo.png" className = {classes.imagelogo} />
                <Typography>Enter the access code to get access.</Typography>
                <TextField fullWidth autofocus margin="normal" id="standard-basic" onChange={(e) =>{setCode(e.target.value)}} value={code} label="Access Code" />
                <div className={classes.buttons}>
                    <Button variant="contained" color="secondary" onClick={()=>Validation()}>
                        Get Access
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default Validate;
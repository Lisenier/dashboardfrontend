import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
        links: {
            display: 'flex',
            flexDirection: 'row',
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
        },
    }
})

function Login(props) {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const classes = useStyles()
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)

    const Login = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("Invalid Email");
            return
        }
        fetch("http://localhost:5000/api/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                console.log(data.error)
            }else{
                localStorage.setItem("email",email)
                localStorage.setItem("firstname",data.firstname)
                localStorage.setItem("jwt", data.token)
                dispatch({type:"USER",payload:email})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className = {classes.root}>
            <div className = {classes.imagepage} />
            <div className = {classes.formpage}>
                <img src="assets/logo.png" className = {classes.imagelogo} />
                <Typography>Welcome Back! Please login to your account.</Typography>
                <TextField fullWidth autofocus margin="normal" id="standard-basic" onChange={(e) =>{setEmail(e.target.value)}} value={email} label="Email" />
                <TextField fullWidth autofocus margin="normal" id="standard-basic" onChange={(e) =>{setPassword(e.target.value)}} value={password} type="password" label="Password" />
                <div className= {classes.links}>
                    <Link to='/forgot'><Typography>Forgot Password</Typography></Link>
                </div>
                <div className={classes.buttons}>
                    <Button variant="contained" color="secondary" onClick={()=>Login()}>
                        Login
                    </Button>
                    <Link to="/signup"><Button variant="contained" color="Primary">
                        Signup
                    </Button></Link>
                </div>

            </div>
        </div>
    );
}

export default Login;
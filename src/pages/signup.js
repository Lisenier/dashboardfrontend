import { Button, FormControlLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

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
            padding: '4rem',
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
    }
})

function Signup(props) {

    const history = useHistory()
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmpassword,setConfirmpassword] = useState("")
    const classes = useStyles()
    const Register = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("Invalid Email");
            return null;
        }
        fetch("http://localhost:5000/api/register",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstname,
                lastname,
                username,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                alert(data.error)
            }else{
                localStorage.setItem("email",data.useremail)
                history.push('/validate')
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
                <Typography style={{color: '#BDBEC4'}}>Please complete to create your account</Typography>
                <div style={{margin:'0 7rem'}}>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <TextField style={{margin: '2rem 0 2rem 2rem',}} fullWidth autofocus id="standard-basic" onChange={(e) =>{setFirstname(e.target.value)}} value={firstname} label="FirstName" />
                <TextField style={{margin: '2rem',}} fullWidth autofocus id="standard-basic" onChange={(e) =>{setLastname(e.target.value)}} value={lastname} label="LastName" />
                </div>
                <TextField style={{margin: '1rem',}} fullWidth autofocus id="standard-basic" onChange={(e) =>{setUsername(e.target.value)}} value={username} label="UserName" />
                <TextField style={{margin: '1rem',}} fullWidth autofocus id="standard-basic" onChange={(e) =>{setEmail(e.target.value)}} value={email} label="Email" />
                <TextField style={{margin: '1rem',}} fullWidth autofocus id="standard-basic" onChange={(e) =>{setPassword(e.target.value)}} value={password} type="password" label="Password" />
                <TextField style={{margin: '1rem',}} fullWidth autofocus id="standard-basic" onChange={(e) =>{setConfirmpassword(e.target.value)}} value={confirmpassword} type="password" label="Confirm Password" />
                </div>
                <div className= {classes.links}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="I agree with terms and conditions"
                />
                </div>
                <Button style={{padding: '1rem 5rem',color: 'white', backgroundColor: '#43425D',margin: '2rem'}} variant="contained" color="secondary" onClick={()=>Register()}>
                    Signup
                </Button>
                <Link to='/login'><Typography>Already have an account? Sign in.</Typography></Link>

            </div>
        </div>
    );
}

export default Signup;
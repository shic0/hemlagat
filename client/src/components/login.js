import React from 'react'
import { Avatar, Checkbox, FormControlLabel, Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

var objPeople = [
    {
        username: "Ryan",
        password: "code"
    },
    {
        username: "Max",
        password: "code"
    },
    {
        username: "Rocky",
        password: "code"
    },
]

/* function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i]. 
            password) {
                console.log(username + " is logged in!!")
            }
    }
} */

const Login=()=>{

    const paperStyle={padding :20, height: '50vh', width:280, margin: "20px auto"}
    const avatarStyle={backgroundColor:'#004280'}
    const btnstyle={margin: '8px 0', backgroundColor:'#004280'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>
                                Sign in
                </h2>
                </Grid>
                <TextField label="Username" placeholder='Enter username' variant="standard" fullWidth required/>
                <TextField label="Password" placeholder='Enter password' variant="standard" type='password' fullWidth required/>
                <FormControlLabel
                control={
                    <Checkbox
                    name="checkedB"
                    color="primary"
                    />
                }
                label="Remember me" align='left'
                />
                <Button type='submit' color='primary' fullWidth variant='contained' style={btnstyle} >Sign in</Button>
                <Typography >
                    <Link href="#" color="#004280">
                        Forgot password
                    </Link>
                </Typography>
                <Typography >Do you already have a account?
                    <Link href="#" color="#004280">
                        Sign up
                    </Link>
                </Typography>

            </Paper>
        </Grid>
        
    )
}
// If else logik för om kunden har loggat in så ska han kuna fortsätta handla.
// Else så behöver kunden registrera sig.
// När du trycker på login sidan så behöver du en verifikation att du är inloggad.

export default Login;


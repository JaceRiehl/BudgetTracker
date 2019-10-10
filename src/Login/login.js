import { Link } from 'react-router-dom';
import React, {useState}from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const firebase = require("firebase");

function LoginComponent(props) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginError, setLoginError] = useState('');
    const {classes} = props;

    return (
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Typography component='h1' variant='h5'>
                    Log In
                </Typography>
                <form className={classes.form} onSubmit={(e) => submitLogin(e, email, password, props, setLoginError)}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-email-input'> Enter your Email</InputLabel>
                        <Input autoComplete='email' autoFocus id='login-email-input' onChange={(e) => userTyping('email', e, setEmail, setPassword)}/>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='login-password-input'> Enter your Password</InputLabel>
                        <Input type='password' id='login-password-input' onChange={(e) => userTyping('password', e, setEmail, setPassword)}/>
                    </FormControl>
                    <Button className={classes.submit} type='submit' fullWidth variant='contained' color='primary'>Log
                        in</Button>
                </form>
                {
                    loginError ?
                        <Typography component='h5' variant='h6' className={classes.errorText}>Incorrect Login
                            Question</Typography>
                        : null
                }
                <Typography component='h5' variant='h6' className={classes.noAccountHeader}>Don't have an
                    account?</Typography>
                <Link className={classes.signUpLink} to='/signup'>Sign Up!</Link>
            </Paper>

        </main>)
}


    async function submitLogin(e, email, password, props, setLoginError) {
        e.preventDefault();

        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                props.history.push('/dashboard');
            }, err => {
                setLoginError('Server Error');
                console.log(err)
            });
        }
    function userTyping(type, e, setEmail, setPassword){
        switch(type) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }


export default withStyles(styles)(LoginComponent);
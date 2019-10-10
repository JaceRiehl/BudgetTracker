import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from './styles'
const firebase = require('firebase');

function SignUpComponent(props){
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    const [signUpError, setSignUpError] = useState('');
    const {classes} = props;

        return(
            <main className={classes.main}>
                <CssBaseLine/>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        Sign Up
                    </Typography>
                    <form onSubmit={(e) => submitSignUp(e, email, password)} className={classes.form}>

                    <FormControl required fullWidth margin ='normal'>
                        <InputLabel htmlFor='signup-email-input'>Enter your email</InputLabel>
                        <Input autoComplete='email' autoFocus id='signup-email-input' onChange={(e) => userTyping('email', e)}/>
                    </FormControl>

                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-input'>Create a password</InputLabel>
                        <Input type='password' id='signup-password-input' onChange={(e) => userTyping('password', e)}/>
                    </FormControl>

                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-password-confirmation-input'>Create a password</InputLabel>
                        <Input type='password' id='signup-password-confirmation-input' onChange={(e) => userTyping('passwordConfirmation', e)}/>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                    </form>
                    {
                        signUpError ?
                            <Typography className={classes.errorText} component='h5' variant='h6'>
                                {signUpError}
                            </Typography> :
                            null
                    }
                    <Typography component='h5' variant='h6' className={classes.hasAccountHeader}>Already have an Account?</Typography>
                    <Link className={classes.logInLink} to='/login'>Log In</Link>
                </Paper>
            </main>);

        function formIsValid() {
           return password === passwordConfirmation;
        }
         function userTyping(type, e){
            switch(type){
                case 'email' :
                    setEmail(e.target.value);
                    break;
                case 'password' :
                    setPassword(e.target.value);
                    break;
                case 'passwordConfirmation' :
                    setPasswordConfirmation(e.target.value);
                    break;
                default:
                    break;
            }
        }

        function submitSignUp(e, email, password){
            e.preventDefault();

            if(!formIsValid()) {
                setSignUpError('Passwords don\'t match')
                return;
            }

            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(authRes => {
                    const userObj = {
                        email: authRes.user.email
                    };
                    firebase
                        .firestore()
                        .collection('user')
                        .doc(email)
                        .set(userObj)
                        .then(() => {
                            props.history.push('/dashboard')
                        }, dbError => {
                            console.log(dbError);
                            setSignUpError('Failed to add user');
                        })
                }, authError => {
                    console.log(authError);
                    setSignUpError('Failed to add user');
                })
        }
    }






export default withStyles(styles)(SignUpComponent);
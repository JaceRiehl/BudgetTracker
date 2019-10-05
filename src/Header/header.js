import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import {Link} from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from './styles'

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            errorText: '',
            hideAppBar: false
        }
    }
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.rootHeader}>
                <AppBar position='static'>
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Typography className={classes.title} component='h5' variant='h6'>Easy Budget</Typography>
                        <Button component={Link} to='/login' className={classes.menuButton}>Log In</Button>
                        <Button component={Link} to='/signup' className={classes.menuButton}>Sign up</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
    hideAppBar = (e) => {
        this.setState({hideAppBar: true})
        console.log(this.state.hideAppBar);
    }
}



export default withStyles(styles)(Header)
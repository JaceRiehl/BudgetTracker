import React from 'react'
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
import Header from '../Header/header'

class MainComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            errorText: ''
        }
    }
    render(){
        const {classes} = this.props;
        return(
            <main className={classes.main}>
                <CssBaseLine></CssBaseLine>
                <Header></Header>
                <Paper className={classes.paper}>

                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(MainComponent)
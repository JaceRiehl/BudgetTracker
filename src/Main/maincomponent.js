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
import Header from '../Header/header'

function MainComponent(props){
    const {classes} = props;
    return(
        <main className={classes.main}>
            <CssBaseLine/>
            <Header/>
            <Paper className={classes.paper}>

            </Paper>
        </main>
    )
}

export default withStyles(styles)(MainComponent)
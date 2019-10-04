const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
    },
    paper: {
        marginTop: theme.spacing(1.5),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(),
    },
    submit: {
        marginTop: theme.spacing(3),
    },
    noAccountHeader: {
        width: '100%'
    },
    signUpLink: {
        width: '100%',
        textDecoration: 'none',
        color: '#303f9f',
        fontWeight: 'bolder'
    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    }
});

export default styles;
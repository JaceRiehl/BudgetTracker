const styles = theme => ({
    rootHeader: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white'
    },
    title: {
        flexGrow: 1,
    },
    main: {
        width: 'fullWidth',
        display: 'block', // Fix IE 11 issue.
    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    },
    linkButton: {
        color: 'white'
    },
    toolbar: {
        backgroundColor: '#42b6f5'
    }
});

export default styles;
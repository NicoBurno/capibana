// @flow

import * as React from 'react';
import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './mui.css';

type Props = {||};

class MainLayoutAppBar extends React.Component<Props> {
    render() {
        const { classes } = this.props;

        return (
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.title}
                    >
                        Capibana
                    </Typography>
                    <Button color="inherit">Войти</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(MainLayoutAppBar);

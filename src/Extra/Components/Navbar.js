import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import useStyles from './NavBarStyles'
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation } from 'react-router-dom';

export default function Navbar({totalItems}) {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h5" color="inherit" component={Link} to="/">
                    BackYard Sale
                </Typography>
                <div className={classes.grow}/>
                {(location.pathname === '/') && (
                <div className={classes.button}>

                    <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
                )}
            </Toolbar>
        </AppBar>
        </>
    )
}

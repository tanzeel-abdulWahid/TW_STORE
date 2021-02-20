import React from 'react'
import { AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from "./styles";
import {Link, useLocation} from 'react-router-dom';
import logo from "../../assests/commerce.png"

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <div>
            <AppBar position="fixed" className={classes.AppBar} color="inherit"> 
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="TW store" height="25px" className={classes.image} />
                        TW store
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                    <div className={classes.button}>
                        <IconButton  component={Link} to="/cart" aria-label="show cart items" color="inherit">
                            <Badge badgeContent={totalItems } color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar

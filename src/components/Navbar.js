import React from 'react';
import {AppBar,Button,Grid,Toolbar} from '@mui/material'
import { NavLink } from 'react-router-dom';
import { LOGGIN_ROUTE } from '../const/routers';

const Navbar = () => {
    const user = true
    return (
        <AppBar color ={ ""} position="static">
        <Toolbar variant={'dense'} >
            <Grid container justifyContent={'flex-end'}>
                {user ? 
                <Button variant={'outlined'}>Login</Button>
                : 
                <NavLink to={LOGGIN_ROUTE}>
                <Button variant={'outlined'}>Logout</Button>
                </NavLink>
                }       
            </Grid>
        </Toolbar>
        </AppBar>
    );
};

export default Navbar;
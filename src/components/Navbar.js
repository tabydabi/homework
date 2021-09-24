import React , {useContext} from 'react';
import {AppBar,Button,Grid,Toolbar} from '@mui/material'
import { NavLink } from 'react-router-dom';
import { LOGGIN_ROUTE } from '../const/routers';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';

const logout = () => firebase.auth().signOut()

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar color ={ ""} position="static">
        <Toolbar variant={'dense'} >
            <Grid container justifyContent={'flex-end'}>
                {user ? 
                <Button onClick={logout} variant={'outlined'}>Выйти</Button>
                : 
                <NavLink to={LOGGIN_ROUTE}>
                <Button variant={'outlined'}>Войти</Button>
                </NavLink>
                }       
            </Grid>
        </Toolbar>
        </AppBar>
    );
};

export default Navbar;
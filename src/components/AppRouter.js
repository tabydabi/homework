import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CHAT_ROUTE, LOGGIN_ROUTE } from '../const/routers';
import { privateRouters, publicRouters } from './routes';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '..';

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return user ? 
    (
        <Switch>
            {privateRouters.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to = {CHAT_ROUTE}/>
        </Switch>
    )
    :
    (
        <Switch>
            {publicRouters.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to = {LOGGIN_ROUTE}/>           
        </Switch>
    )
};

export default AppRouter;
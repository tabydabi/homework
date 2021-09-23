import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CHAT_ROUTE, LOGGIN_ROUTE } from '../const/routers';
import { privateRouters, publicRouters } from './routes';

const AppRouter = () => {
    const user = false
    return user ? 
    (
        <Switch>
            {privateRouters.map(({path, Component}) => 
                <Route path={path} component={Component} exact={true} />
            )}
            <Redirect to = {CHAT_ROUTE}/>
        </Switch>
    )
    :
    (
        <Switch>
            {publicRouters.map(({path, Component}) => 
                <Route path={path} component={Component} exact={true} />
            )}
            <Redirect to = {LOGGIN_ROUTE}/>           
        </Switch>
    )
};

export default AppRouter;
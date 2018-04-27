import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../containers/Auth';
import LoggedinPages from '../containers/LoggedinPages';
import ParcelTracking from '../containers/ParcelTracking';

const PrivateRoute = ({ needRedirect, redirectTo, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (needRedirect ? (
                <Component {...props}>
                    {rest.children}
                </Component>
            ) : (
                <Redirect
                    to={{ pathname: redirectTo }}
                />
            ))
        }
    />
);

const Content = (props) => {
    const { login } = props;
    return (
        <div>
            <Route
                exact path='/'
                render={() => (<Redirect to='login' />)}
            />
            <PrivateRoute
                path='/login'
                redirectTo='/list/all'
                needRedirect={!login}
                component={Auth}
            />
            <PrivateRoute
                path='/list/all'
                redirectTo='/login'
                needRedirect={login}
                component={LoggedinPages}
            />
            <PrivateRoute
                path='/list/incoming'
                redirectTo='/login'
                needRedirect={login}
                component={LoggedinPages}
            />
            <PrivateRoute
                path='/list/track'
                redirectTo='/login'
                needRedirect={login}
                component={LoggedinPages}
            />
            <PrivateRoute
                path='/track'
                redirectTo='/list/track'
                needRedirect={!login}
                component={ParcelTracking}
            />
        </div>
    )
}

export default Content

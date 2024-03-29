// @flow

import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from 'router';
import Routes from 'router/routes';

import MainLayout from 'layouts/main';

type Props = {||};

export default class App extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Router>
                    <MainLayout>
                        <Routes />
                    </MainLayout>
                </Router>
            </React.Fragment>
        );
    }
}

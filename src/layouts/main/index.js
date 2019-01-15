// @flow

import * as React from 'react';

import AppBar from './app-bar';

type Props = {
    children: React.Node
};

export default class MainLayout extends React.Component<Props> {
    render() {
        return (
            <div>
                <AppBar />
                {this.props.children}
            </div>
        );
    }
}

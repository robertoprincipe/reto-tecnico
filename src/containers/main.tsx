/* eslint-disable import/first */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/home';
import 'antd/dist/antd.css'; 

export class Main extends React.Component<any, any> {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        )
    }
}

export default Main;
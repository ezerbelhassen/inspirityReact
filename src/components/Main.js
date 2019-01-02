import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {  } from 'mdbreact';
import AppPage from './AppPage'
import BlogPage from './seComponents/BlogPage'
import Projects from './seComponents/Projects'

const Main = () => (
    <Switch>
        <Route exact path="/" component={AppPage} />
        <Route  path="/BlogPage" component={BlogPage} />
        <Route path="/Projects" component={Projects} />
    </Switch>
)
export default Main;


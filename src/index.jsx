import React from 'react';
import { render as r } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Page from './Page';
import Posts from './Posts'



const Content = () => (
    <main>
        <Switch>
            <Route exact path="/" component= {Page} />
        </Switch>
    </main>
);

const App = () => (
    <div>
        <Content />
        <Posts />
    </div>);
r(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.querySelector('.cont'),
);
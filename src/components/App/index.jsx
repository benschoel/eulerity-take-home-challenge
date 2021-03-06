import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { Nav } from "../Nav";
import { Home } from "../../pages/Home";
import { AboutMe } from "../../pages/AboutMe";

const Wrapper = styled.div`
    width: 100%;
    max-width: 1368px;
    margin: 0 auto;
    margin-top: 1.5rem;
    padding: 0px 1rem;
`;

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Wrapper>
                    <Nav />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' exact component={AboutMe} />
                        <Route path='/*'>
                            <Redirect to='/' />
                        </Route>
                    </Switch>
                </Wrapper>
            </BrowserRouter>
        </Provider>
    );
};

export { App };

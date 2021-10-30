import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Home } from "../Home";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 1368px;
    margin: 0 auto;
    margin-top: 1.5rem;
    padding: 0px 1rem;
`;

const App = () => {
    return (
        <BrowserRouter>
            <Wrapper>
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Wrapper>
        </BrowserRouter>
    );
};

export { App };

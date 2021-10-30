import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(NavLink)`
    color: #a19dff;
    text-decoration: none;
    font-weight: 700;

    &.active {
        filter: brightness(0.75);
    }

    &:not(:last-of-type) {
        margin-right: 1.5rem;
    }
`;

const Nav = () => {
    return (
        <Wrapper>
            <h1 style={{ color: "#333333" }}>Pets!</h1>
            <Links>
                <StyledLink to='/' exact>
                    Home
                </StyledLink>
                <StyledLink to='/about'>About Me</StyledLink>
            </Links>
        </Wrapper>
    );
};

export { Nav };

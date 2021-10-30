import React from "react";
import styled from "styled-components";

const Input = styled.input`
    font-size: 1rem;
    padding: 0.75em;
    border: none;
    border-radius: 8px;
    outline: none;
    width: 100%;
    background-color: #eaeaea;
    color: #333333;

    &::placeholder {
        color: #777777;
        opacity: 1;
    }

    &:active,
    &:focus {
        outline: solid 2px #a19dff;
    }
`;

const QueryBar = ({ query, setQuery }) => {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <Input
                placeholder='Search the pets:'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export { QueryBar };

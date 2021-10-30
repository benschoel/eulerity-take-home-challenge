import React from "react";
import { Pet } from "../Pet";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 6rem;
`;

const Column = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 0 0.5rem;

    &:last-of-type {
        padding-right: 0px;
    }

    &:first-of-type {
        padding-left: 0px;
    }

    @media screen and (max-width: 1200px) {
        flex: 50%;
        max-width: 50%;
    }

    @media screen and (max-width: 800px) {
        flex: 100%;
        max-width: 100%;
    }
`;

const getNth = (arr, j) => {
    const toReturn = [];

    for (let i = j; i < arr.length; i += 4) {
        toReturn.push(arr[i]);
    }

    return toReturn;
};

const PetsGrid = ({ pets }) => {
    return (
        <Wrapper>
            {new Array(4).fill().map((_, i) => (
                <Column key={"column-" + i}>
                    {getNth(pets, i).map((pet) => (
                        <Pet key={pet.created + "-" + pet.title} {...pet} />
                    ))}
                </Column>
            ))}
            {/* {pets.map((pet, index) => (
                    
                ))} */}
        </Wrapper>
    );
};

export { PetsGrid };

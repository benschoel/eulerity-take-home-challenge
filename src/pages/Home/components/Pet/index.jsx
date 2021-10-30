import React from "react";
import styled from "styled-components";

const PetWrap = styled.div`
    margin-bottom: 1rem;
    position: relative;

    &:hover {
        cursor: pointer;

        & .pet-data {
            bottom: 0px;
            opacity: 100%;
        }
    }
`;

const PetImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    border-radius: 0.25rem;
`;

const PetData = styled.div`
    position: absolute;
    transition: 0.2s;
    padding: 12px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 0px 0px 4px 4px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    opacity: 0%;
`;

const PetTitle = styled.div`
    font-weight: 700;
    font-size: 1rem;
`;

const PetDescription = styled.div`
    margin-top: 0.25rem;
    font-size: 0.85rem;
    opacity: 0.9;
`;

const PetCreatedDate = styled.div`
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    opacity: 0.75;
`;

const Pet = ({ title, description, url, created }) => {
    return (
        <PetWrap>
            <PetImage src={url} href={title} />
            <PetData className='pet-data'>
                <PetTitle>{title}</PetTitle>
                <PetDescription>{description}</PetDescription>
                <PetCreatedDate>{new Date(created).toLocaleString()}</PetCreatedDate>
            </PetData>
        </PetWrap>
    );
};

export { Pet };

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { clearSelections, selectAll } from "../../../../redux/slices/petsSlice";

const Wrapper = styled.div`
    transition: 0.2s;
    position: fixed;
    bottom: ${(props) => (props.visible ? "0px" : "-100%")};
    left: 0px;
    right: 0px;
    background-color: white;
    padding: 1.5rem;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.16);
`;

const Content = styled.div`
    width: 100%;
    max-width: 1368px;
    margin: 0 auto;
    padding: 0px 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DangerLink = styled.span`
    color: red;
    cursor: pointer;
    text-decoration: underline;
`;

const Button = styled.button`
    font-size: 1rem;
    font-weight: bold;
    padding: 0.75em 1.25em;
    border: none;
    border-radius: 8px;
    background-color: #f0f0f0;
    color: #444444;
    transition: 0.2s;

    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
`;

const PrimaryButton = styled(Button)`
    background-color: #a19dff;
    color: #ffffff;
`;

const DownloadBar = () => {
    const selectedImages = useSelector((state) => state.pets.selectedPets);
    const dispatch = useDispatch();

    return (
        <Wrapper visible={selectedImages.length !== 0}>
            <Content>
                <DangerLink onClick={() => dispatch(clearSelections())}>Clear selection</DangerLink>
                <div>
                    <Button style={{ marginRight: "0.5rem" }} onClick={() => dispatch(selectAll())}>
                        Select all
                    </Button>
                    <PrimaryButton>
                        Download {selectedImages.length} image{selectedImages.length > 1 ? "s" : ""}
                    </PrimaryButton>
                </div>
            </Content>
        </Wrapper>
    );
};

export { DownloadBar };

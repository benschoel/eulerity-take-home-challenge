import { createSlice } from "@reduxjs/toolkit";
import { filterPets } from "../../utils/filterPets";
import STATUS_CODES from "../../utils/STATUS_CODES";

export const petsSlice = createSlice({
    name: "pets",
    initialState: {
        allPets: [],
        selectedPets: [], // url images of each pet
        isDisabled: false,
        status: STATUS_CODES.UNLOADED,
    },
    reducers: {
        addAllPets: (state, action) => {
            state.allPets = action.payload;
        },
        toggleImage: (state, action) => {
            if (state.selectedPets.includes(action.payload)) {
                state.selectedPets = state.selectedPets.filter((url) => url !== action.payload);
            } else {
                state.selectedPets = [...state.selectedPets, action.payload];
            }
        },
        clearSelections: (state) => {
            state.selectedPets = [];
        },
        selectAll: (state, action) => {
            state.selectedPets = state.allPets
                .filter(filterPets(action.payload))
                .map((pet) => pet.url);
        },
        setIsDisabled: (state, action) => {
            state.isDisabled = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const { addAllPets, toggleImage, clearSelections, selectAll, setIsDisabled, setStatus } =
    petsSlice.actions;

export default petsSlice.reducer;

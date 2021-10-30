import { createSlice } from "@reduxjs/toolkit";

export const petsSlice = createSlice({
    name: "pets",
    initialState: {
        allPets: [],
        selectedPets: [], // url images of each pet
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
        selectAll: (state) => {
            state.selectedPets = state.allPets.map((pet) => pet.url);
        },
    },
});

export const { addAllPets, toggleImage, clearSelections, selectAll } = petsSlice.actions;

export default petsSlice.reducer;

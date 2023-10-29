import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";

interface SearchState {
    searchTerm:string
};

const initialState:SearchState = {
    searchTerm:''
};

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    }
});

export const selectSearchTerm = (state:RootState) => state.search.searchTerm;
export const {setSearchTerm} = searchSlice.actions
export default searchSlice.reducer
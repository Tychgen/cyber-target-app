import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";

export interface SavedForLaterItems {
    id: number;
    isSaved: boolean;
}

interface SavedForLaterState {
    savedForLaterItems: SavedForLaterItems[];
}

const initialState: SavedForLaterState  = {
    savedForLaterItems: []
}

const savedForLaterSlice = createSlice({
    name: 'savedForLater',
    initialState,
    reducers: {
        addToSavedForLater: (state, action: PayloadAction<SavedForLaterItems>) => {
            const id = action.payload.id;
            const existingItem = state.savedForLaterItems.find((item) => item.id === id);
      
            if (existingItem) {
                existingItem.isSaved = true;
            } else {
                state.savedForLaterItems.push({
                    id,
                    isSaved: true,
                });
            }
        },
        removeFromSavedForLater: (state, action: PayloadAction<SavedForLaterItems>) => {
            const id = action.payload.id;
            const existingItem = state.savedForLaterItems.find((item) => item.id === action.payload.id);
      
            if (existingItem) {
                existingItem.isSaved = false;
            } else {
                state.savedForLaterItems.push({
                    id,
                    isSaved: false,
                });
            }
        },
    }
});

export const selectSavedForLater = (state: RootState) => state.savedForLater.savedForLaterItems;
export const { addToSavedForLater, removeFromSavedForLater } = savedForLaterSlice.actions;
export default savedForLaterSlice.reducer;

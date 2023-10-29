import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";

export interface FavlistItems {
    id:number,
    isFav:boolean
}

interface FavlistState {
    favlistItems:FavlistItems[]
}

const initialState: FavlistState  = {
    favlistItems: []
}

const favlistSlice = createSlice({
    name: 'favlist',
    initialState,
    reducers: {
        addToFavlist: (state, action:PayloadAction<FavlistItems>) => {
            const id = action.payload.id;
            const existingItem = state.favlistItems.find((item) => item.id === id);
      
            if (existingItem) {
              existingItem.isFav = true;
            } else {
              state.favlistItems.push({
                id,
                isFav: true,
              });
            }
          },
        removeFromFavlist: (state, action:PayloadAction<FavlistItems>) => {
            const id = action.payload.id;
            const existingItem = state.favlistItems.find((item) => item.id === action.payload.id);
      
            if (existingItem) {
              existingItem.isFav = false;
            } else {
              state.favlistItems.push({
                id,
                isFav: false,
              });
            }
        },  
    }
});


export const selectFavlist = (state:RootState) => state.favlist.favlistItems;
export const {addToFavlist, removeFromFavlist} = favlistSlice.actions;
export default favlistSlice.reducer
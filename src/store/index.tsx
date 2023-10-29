import { configureStore} from '@reduxjs/toolkit'
import searchSlice from './slices/searchSlice'
import cartSlice from './slices/cartSlice'
import favlistSlice from './slices/favouriteSlice'
import productsSlice from './slices/productsSlice'
import savedForLaterSlice from './slices/savedForLaterSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        search: searchSlice,
        favlist: favlistSlice,
        product: productsSlice,
        savedForLater: savedForLaterSlice
      },
      devTools: true, 
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
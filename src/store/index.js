import { createSlice, configureStore } from '@reduxjs/toolkit'


const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        isFirstRender: true,
        quotes: []
    },
    reducers: {
        storeQuotes (state, action) {
            state.quotes = action.payload
        },
        addQuote (state, action) {
            state.quotes = [...state.quotes, action.payload]
        },
        clearFirstRender (state, action) {
            state.isFirstRender = false
        }
      
    }

})

const store = configureStore({reducer: {
    quotes: quoteSlice.reducer
}})

export const quoteActions = quoteSlice.actions;
export default store



import { createReducer } from '@reduxjs/toolkit'

import {
  loadProducts
} from '../actions.js'

const initialState = {
  products: [],
  isProductsLoaded: false
}


const products = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts, (state, action) => {
      state.products = action.payload;
      state.isProductsLoaded = true;
    })
})

export { products }

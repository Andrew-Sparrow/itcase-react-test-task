import { createReducer } from '@reduxjs/toolkit'

import {
  loadProduct
} from '../actions.js'

const initialState = {
  product: {},
  isProductLoaded: false
}


const product = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProduct, (state, action) => {
      state.product = action.payload;
      state.isProductLoaded = true;
    })
})

export { product }

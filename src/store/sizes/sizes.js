import { createReducer } from '@reduxjs/toolkit'

import {
  loadSizes
} from '../actions.js'

const initialState = {
  sizes: {},
  isSizesLoaded: false
}


const sizes = createReducer(initialState, (builder) => {
  builder
    .addCase(loadSizes, (state, action) => {
      state.sizes = action.payload;
      state.isSizesLoaded = true;
    })
})

export { sizes }

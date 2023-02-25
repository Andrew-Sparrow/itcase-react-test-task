import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_PRODUCTS: 'products/loadProducts',
  LOAD_PRODUCT: 'product/loadProduct',
  LOAD_SIZES: 'sizes/loadSizes'
}

export const loadProducts = createAction(
  ActionType.LOAD_PRODUCTS,
  (products) => ({ payload: products }),
)

export const loadProduct = createAction(
  ActionType.LOAD_PRODUCT,
  (product) => ({ payload: product }),
)

export const loadSizes = createAction(
  ActionType.LOAD_SIZES,
  (sizes) => ({ payload: sizes }),
)

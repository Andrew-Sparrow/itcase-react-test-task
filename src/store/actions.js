import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_PRODUCTS: 'products/loadProducts',
  LOAD_PRODUCT: 'product/loadProduct',
}

export const loadProducts = createAction(
  ActionType.LOAD_PRODUCTS,
  (products) => ({ payload: products }),
)

export const loadProduct = createAction(
  ActionType.LOAD_PRODUCT,
  (product) => ({ payload: product }),
)

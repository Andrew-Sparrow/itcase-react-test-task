import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_PRODUCTS: 'products/loadProducts',
  LOAD_PRODUCT: 'product/loadProduct',
  REDIRECT_TO_ROUTE: 'products/redirectToRoute',
}

export const loadProducts = createAction(
  ActionType.LOAD_PRODUCTS,
  (products) => ({ payload: products }),
)

export const loadProduct = createAction(
  ActionType.LOAD_PRODUCT,
  (product) => ({ payload: product }),
)

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({ payload: url }),
)

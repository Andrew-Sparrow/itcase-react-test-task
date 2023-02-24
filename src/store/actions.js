import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_PRODUCTS: 'products/loadProducts',
  CHANGE_LOADING_PRODUCTS_PROCESS_STATUS: 'products/changeLoadingProductsProcessStatus',
  REDIRECT_TO_ROUTE: 'products/redirectToRoute',
}

export const loadProducts = createAction(
  ActionType.LOAD_PRODUCTS,
  (products) => ({ payload: products }),
)

export const changeLoadingProductsProcessStatus = createAction(
  ActionType.CHANGE_LOADING_PRODUCTS_PROCESS_STATUS,
  (isLoading) => ({ payload: isLoading }),
)

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({ payload: url }),
)
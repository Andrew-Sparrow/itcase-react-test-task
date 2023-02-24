import {
  loadProducts,
} from './actions'

import {
  getProducts,
  getProduct
} from '../services/api';


export const fetchProductsList = () => (dispatch, _getState) => (
  getProducts()
    .then((data) => {
      dispatch(loadProducts(data));
    })
    .catch((err) => {})
)

export const fetchProduct = () => (dispatch, _getState) => (
  getProduct()
    .then((data) => {
      dispatch(loadProducts(data));
    })
    .catch((err) => {})
)

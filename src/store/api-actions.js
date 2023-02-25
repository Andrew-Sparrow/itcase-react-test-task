import {
  loadProducts,
  loadProduct,
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

export const fetchProduct = (id) => (dispatch, _getState) => (
  getProduct(id)
    .then((data) => {
      dispatch(loadProduct(data));
    })
    .catch((err) => {})
)

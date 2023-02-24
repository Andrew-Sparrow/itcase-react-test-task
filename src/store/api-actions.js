import {
  loadProducts,
  redirectToRoute
} from './actions'

import { getProducts } from '../services/api';


export const fetchProductsList = () => (dispatch, _getState) => (
  getProducts()
    .then((data) => {
      dispatch(loadProducts(data));
    })
    .catch((err) => {})
)

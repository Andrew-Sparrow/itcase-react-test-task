import {combineReducers} from 'redux'
import { products } from './products/products'
import { product } from './product-card/product-card';


export const NameSpace = {
  PRODUCTS: 'PRODUCTS',
  PRODUCT_CARD: 'PRODUCTS-CARD',
};

export default combineReducers({
  [NameSpace.PRODUCTS]: products,
  [NameSpace.PRODUCT_CARD]: product,
})

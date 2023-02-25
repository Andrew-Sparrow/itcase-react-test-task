import {combineReducers} from 'redux'
import { products } from './products/products'
import { product } from './product-card/product-card';
import { sizes } from './sizes/sizes';


export const NameSpace = {
  PRODUCTS: 'PRODUCTS',
  PRODUCT_CARD: 'PRODUCT_CARD',
  SIZES: 'SIZES',
};

export default combineReducers({
  [NameSpace.PRODUCTS]: products,
  [NameSpace.PRODUCT_CARD]: product,
  [NameSpace.SIZES]: sizes,
})

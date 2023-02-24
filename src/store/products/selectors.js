import { NameSpace } from '../root-reducer'

export const getProducts = (state) => state[NameSpace.PRODUCTS].products
export const getIsProductsLoaded = (state) => state[NameSpace.PRODUCTS].isProductsLoaded

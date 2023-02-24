import { NameSpace } from '../root-reducer'

export const getPlaces = (state) => state[NameSpace.PRODUCTS].products
export const getIsProductsLoaded = (state) => state[NameSpace.PRODUCTS].isProductsLoaded

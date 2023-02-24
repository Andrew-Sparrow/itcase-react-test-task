import { NameSpace } from '../root-reducer'

export const getProduct = (state) => state[NameSpace.PRODUCTS].product
export const getIsProductLoaded = (state) => state[NameSpace.PRODUCTS].isProductLoaded

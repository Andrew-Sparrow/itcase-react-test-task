import { NameSpace } from '../root-reducer'

export const getProduct = (state) => state[NameSpace.PRODUCT_CARD].product
export const getIsProductLoaded = (state) => state[NameSpace.PRODUCT_CARD].isProductLoaded

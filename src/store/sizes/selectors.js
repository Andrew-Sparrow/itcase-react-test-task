import { NameSpace } from '../root-reducer'

export const getSizes = (state) => state[NameSpace.SIZES].sizes
export const getIsSizesLoaded = (state) => state[NameSpace.SIZES].isSizesLoaded

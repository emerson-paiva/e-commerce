import ShopActionTypes from './types';

export const updateCollections = colletionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: colletionsMap,
});

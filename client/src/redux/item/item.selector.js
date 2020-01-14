import { createSelector } from 'reselect';

const selectItem = state => state.item;

export const selectCollections = createSelector(
  [selectItem],
  item => item.collections
);


export const filteredCollections = createSelector(
  [selectItem],
  item => item.fileredCollections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectItem],
  item => item.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectItem],
  item => !!item.collections
);

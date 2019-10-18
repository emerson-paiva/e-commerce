import React, { useState } from 'react';

import CollectionPreview from '../../components/CollectionPreview';

import SHOP_DATA from './ShopData';

import './Shop.scss';

function Shop() {
  const [collections] = useState(SHOP_DATA);

  return (
    <div>
      {collections.map(collection => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
}

export default Shop;

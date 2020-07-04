import React from 'react';
import {useRouter} from 'next/router';
import ItemSingel from '../components/ItemSingle';

const ItemPage = () => {
  const {query} = useRouter()
  return (
    <div>
      <ItemSingel id={query.id} />
    </div>
  );
}

export default ItemPage

import React from 'react';
import {useRouter} from 'next/router';
import ItemUpdate from '../components/ItemUpdate';

const Update = () => {
  const {query} = useRouter()

  return (
    <div>
      <ItemUpdate id={query.id} />
    </div>
  );
}

export default Update



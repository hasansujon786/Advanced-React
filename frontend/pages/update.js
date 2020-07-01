import React from 'react';
import UpdateItem from '../components/UpdateItem';
import {useRouter} from 'next/router';

const Update = () => {
  const {query} = useRouter()

  return (
    <div>
      <UpdateItem id={query.id} />
    </div>
  );
}

export default Update



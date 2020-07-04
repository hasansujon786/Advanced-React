import React from 'react';
import gql from 'graphql-tag';
import {useMutation} from 'react-apollo';
import {ALL_ITEMS_QUERY} from './Items'

const DELETE_SINGLE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION ($where: ItemWhereUniqueInput!) {
    deleteItem(where: $where) {
      id
    }
  }
`

const ItemDelete = ({id}) => {
  const [deleteItem, {loading}] = useMutation(DELETE_SINGLE_ITEM_MUTATION, {
    update: (cache, payload) => {
      const data = cache.readQuery({query: ALL_ITEMS_QUERY})
      const items = data.items.filter(item => item.id !== payload.data.deleteItem.id);
      // Put the items back!
      cache.writeQuery({query: ALL_ITEMS_QUERY, data: {items}})
    }
  })

  const handleItemDelete = () => {
    deleteItem({variables: {where: {id}}})
  }
  return (
    <button
      style={{cursor: 'pointer'}}
      onClick={handleItemDelete}>
      Delet{loading ? 'ing...' : 'e'}
    </button>
  );
}

export default ItemDelete

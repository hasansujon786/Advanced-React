import React from 'react';
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import Item from './Item';

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEM_QUERY {
    items {
      id
      title
      image
      largeImage
      price
    }
  }
`

const Center = styled.div`
  text-align: center;
`
const ItemList = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 60px;
 max-width: ${props => props.theme.maxWidth};
 margin: 0 auto;
`

// Query items with render props
const Items = () => {
  return (
    <Center>
      <Query query={ALL_ITEMS_QUERY}>
        {({data, loading, error}) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Erros: {error.message}</p>
          return <ItemList>{data.items.map(item => <Item item={item} key={item.id} />)}</ItemList>
        }}
      </Query>
    </Center>
  );
}

export default Items

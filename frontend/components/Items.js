import React from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import {useRouter} from 'next/router';
import styled from 'styled-components'
import Pagination from './Pagination';
import {perPage} from '../config';
import Item from './Item';

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEM_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(skip:$skip, first:$first, orderBy: createdAt_DESC) {
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
  const {query} = useRouter()
  const page = parseFloat(query.page) || 1
  const skip = page * perPage - perPage

  return (
    <Center>
      <Pagination page={page} />
      <Query query={ALL_ITEMS_QUERY} variables={{skip}}>
        {({data, loading, error}) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Erros: {error.message}</p>
          return <ItemList>{data.items.map(item => <Item item={item} key={item.id} />)}</ItemList>
        }}
      </Query>
      <Pagination page={page} />
    </Center>
  );
}

export default Items

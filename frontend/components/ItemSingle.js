import React from 'react';
import Head from 'next/head'
import {useQuery} from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag'
// file imports
import ErrorMessage from './ErrorMessage';

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY ($where: ItemWhereUniqueInput!) {
    item(where: $where) {
      title
      price
      description
      largeImage
    }
  }
`
const ItemSingelStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`

const ItemSingel = (props) => {
  const {data, loading, error} = useQuery(SINGLE_ITEM_QUERY, {
    variables: {where: {id: props.id}}
  })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />
  if (!data.item) return <p>No item for ID: {props.id}</p>

  const {item} = data
  return (
    <ItemSingelStyles>
      <Head>
        <title>Sick Fits - {item.title}</title>
      </Head>
      <img src={item.largeImage} alt={item.title} />
      <div className="details">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </ItemSingelStyles>
  );
}

export default ItemSingel

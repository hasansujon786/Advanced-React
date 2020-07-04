import React from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import {useQuery} from 'react-apollo'
import PaginationStyles from './styles/PaginationStyles'
import {perPage} from '../config'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`
const Pagination = ({page}) => {
  const {loading, data} = useQuery(PAGINATION_QUERY)
  if (loading) return '...'
  const count = data.itemsConnection.aggregate.count
  const pages = Math.ceil(count / perPage)

  return (
    <PaginationStyles>
      <Link href={{
        pathname: 'items',
        query: {page: page - 1}
      }}>
        <a className='pre' aria-disabled={page <= 1}> pre </a>
      </Link>
      <p>Page {page} of {pages}</p>
      <p>{count} items total</p>
      <Link href={{
        pathname: 'items',
        query: {page: page + 1}
      }}>
        <a className='next' aria-disabled={page >= pages}> Next </a>
      </Link>
    </PaginationStyles>
  )
}

export default Pagination


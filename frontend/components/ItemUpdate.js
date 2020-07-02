import React, {useState} from 'react';
import gql from 'graphql-tag'
// file imports
import From from './styles/Form'
import {useQuery, useMutation} from 'react-apollo';
import ErrorMessage from './ErrorMessage';
// import Router from 'next/router';

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION ($data: ItemUpdateInput!, $where: ItemWhereUniqueInput!) {
    updateItem(data: $data, where: $where) {
      id
      title
      price
      description
    }
  }
`
const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY ($where: ItemWhereUniqueInput!) {
    item(where: $where) {
      title
      price
      description
    }
  }
`
const ItemUpdate = (props) => {
  const [state, setState] = useState({})

  const [updateItem, updateRes] = useMutation(UPDATE_ITEM_MUTATION);
  const {loading, error, data} = useQuery(SINGLE_ITEM_QUERY, {
    variables: {where: {id: props.id}}
  })
  if (loading) return <p>loading...</p>
  if (!data.item) return <p>No item for ID: {props.id}</p>

  const handleChange = (e) => {
    const {name, type, value} = e.target
    const val = type === 'number' ? parseFloat(value) : value
    setState({...state, [name]: val})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    updateItem({
      variables: {
        where: {id: props.id},
        data: {...state}
      }
    });
  }

  return (
    <div>
      <From onSubmit={handleSubmit}>
        {error && <ErrorMessage error={error} />}
        {updateRes.error && <ErrorMessage error={updateRes.error} />}
        <fieldset disabled={updateRes.loading} aria-busy={updateRes.loading}>
          <label htmlFor="title">
            Title
            <input
              required
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="title"
              id="title"
              defaultValue={data.item.title}
            />
          </label>

          <label htmlFor="price">
            Price
            <input
              required
              onChange={handleChange}
              type='number'
              name="price"
              placeholder="price"
              id="price"
              defaultValue={data.item.price}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              required
              onChange={handleChange}
              name="description"
              placeholder="Enter A Description"
              id="description"
              defaultValue={data.item.description}
            />
          </label>
          <button type='submit'>Sav{updateRes.loading ? 'ing' : 'e'} changes</button>
        </fieldset>
      </From>
    </div>
  );
}

export default ItemUpdate

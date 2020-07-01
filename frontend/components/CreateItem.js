import React, {useState} from 'react';
import gql from 'graphql-tag'
// file imports
import From from './styles/Form'
// import formatMoney from '../lib/formatMoney';
import {Mutation} from 'react-apollo';
import ErrorMessage from './ErrorMessage';
import Router from 'next/router';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION ($data: ItemCreateInput!) {
    createItem(data: $data) {
      id
    }
  }
`
const CreateItem = () => {
  const [state, setState] = useState({
    title: 'random title',
    description: 'random description',
    image: '',
    largeImage: '',
    price: 10000,
  })

  const handleChange = (e) => {
    const {name, type, value} = e.target
    const val = type === 'number' ? parseFloat(value) : value
    setState({...state, [name]: val})
  }

  const handleSubmit = async (e, createItem) => {
    e.preventDefault()
    const {data} = await createItem()
    console.log(data);
    Router.push({
      pathname: '/item',
      query: {id: data.createItem.id}
    })
  }

  return (
    <div>
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={{data: state}}>
        {(createItem, {loading, error}) => (
          <From onSubmit={(e) => handleSubmit(e, createItem)}>
            <ErrorMessage error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">
                Title
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="title"
                  placeholder="title"
                  id="title"
                  value={state.title}
                />
              </label>

              <label htmlFor="image">
                Image
                <input
                  onChange={handleChange}
                  type='text'
                  name="image"
                  placeholder="image"
                  id="image"
                  value={state.image}
                />
              </label>
              <label htmlFor="largeImage">
                Large Image
                <input
                  onChange={handleChange}
                  type='text'
                  name="largeImage"
                  placeholder="largeImage"
                  id="largeImage"
                  value={state.largeImage}
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
                  value={state.price}
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
                  value={state.description}
                />
              </label>
              <button type='submit'>Submit</button>
            </fieldset>
          </From>)}
      </Mutation>
    </div>
  );
}

export default CreateItem

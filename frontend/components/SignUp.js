import React, {useState} from 'react'
import gql from 'graphql-tag'
import Form from './styles/Form'
import ErrorMessage from './ErrorMessage'
import {useMutation} from 'react-apollo'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION ($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`

const SignUp = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const [signUpAnUser, {error, data, loading}] = useMutation(SIGNUP_MUTATION)

  return (
    <Form method='post' onSubmit={e => {
      e.preventDefault()
      signUpAnUser({variables: {...formState}})
      setFormState({
        name: '',
        email: '',
        password: ''
      })
    }}>
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Signup for An Account</h2>
        <ErrorMessage error={error} />
        <label htmlFor="name">
          Name
        <input
            type="text"
            id='name'
            name='name'
            placeholder='name'
            required
            value={formState.name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          email
        <input
            type="email"
            id='email'
            name='email'
            placeholder='email'
            required
            value={formState.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          password
        <input
            type="password"
            id='password'
            name='password'
            placeholder='password'
            required
            value={formState.password}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Signup</button>
      </fieldset>
    </Form>
  )
}

export default SignUp

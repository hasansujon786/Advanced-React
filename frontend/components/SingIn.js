import React, {useState} from 'react'
import {useMutation} from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import ErrorMessage from './ErrorMessage'
import {CURRENT_USER_QUERY} from '../hooks/useUser'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION ($email: String!, $password: String!) {
    signIn( email: $email, password: $password) {
      id
      name
      email
      permissions
      password
    }
  }
`

function SignIn() {
  const [formState, setFormState] = useState({
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

  const [signInAnUser, {error, loading}] = useMutation(SIGNIN_MUTATION, {
    refetchQueries: [
      {query: CURRENT_USER_QUERY}
    ]
  })

  return (
    <Form method='post' onSubmit={async e => {
      e.preventDefault()
      const {data} = await signInAnUser({variables: {...formState}})
      if (data) {
        console.log('signIn succesful');
      }
    }}>
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Sign into your account</h2>
        <ErrorMessage error={error} />
        <label htmlFor="signin-email">
          email
        <input
            type="email"
            id='signin-email'
            name='email'
            placeholder='email'
            required
            value={formState.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="signin-password">
          password
        <input
            type="password"
            id='signin-password'
            name='password'
            placeholder='password'
            value={formState.password}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Signin</button>
      </fieldset>
    </Form>
  )
}

export default SignIn


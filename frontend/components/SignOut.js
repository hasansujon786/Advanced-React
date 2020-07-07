import React from 'react'
import gql from 'graphql-tag'
import {useMutation} from 'react-apollo'
import {CURRENT_USER_QUERY} from '../hooks/useUser'

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signOut
C }
`
const SignOut = () => {
  const [signOutUser] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [
      {query: CURRENT_USER_QUERY}
    ]
  })

  return (
    <button onClick={signOutUser}>
      SignOut
    </button>
  )
}

export default SignOut

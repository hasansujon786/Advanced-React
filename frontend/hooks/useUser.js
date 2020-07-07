import {useQuery} from "react-apollo"
import gql from 'graphql-tag'

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      name
      email
      permissions
    }
  }
`

function useUser() {
  const {data, loading, error} = useQuery(CURRENT_USER_QUERY)
  const user = data && data.me ? data.me : null

  return {user, loading, error}
}

export default useUser

import React from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SingIn'
import styled from 'styled-components'

const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

`
const SignUpPage = () => {
  return (
    <Column>
      <SignIn />
      <SignUp />
    </Column>
  )
}

export default SignUpPage

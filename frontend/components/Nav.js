import React from 'react'
import Link from 'next/link'
import NavStyles from './styles/NavStyles'
import useUser from '../hooks/useUser'
import SignOut from './SignOut'

const Nav = () => {
  const {user} = useUser()
  return (
    <NavStyles>
      <Link href="/"><a>Shop</a></Link>
      {!user && <Link href="/signup"><a>Sign in</a></Link>}

      {user &&
        <>
          <Link href="/sell"><a>Sell</a></Link>
          <Link href="/order"><a>Order</a></Link>
          <Link href="/account"><a>Account</a></Link>
          <SignOut />
        </>
      }
    </NavStyles >
  );
}

export default Nav

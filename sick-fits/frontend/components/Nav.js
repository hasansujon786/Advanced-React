import React from 'react'
import Link from 'next/link'
import NavStyles from './styles/NavStyles'

const Nav = () => {
  return (
    <NavStyles>
      <Link href="/"><a>Home</a></Link>
      <Link href="/sell"><a>Sell</a></Link>
      <Link href="/signup"><a>Signup</a></Link>
      <Link href="/order"><a>Signup</a></Link>
      <Link href="/account"><a>Account</a></Link>
    </NavStyles >
  );
}

export default Nav

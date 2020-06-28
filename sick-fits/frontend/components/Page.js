import React from 'react'
import Header from './Header'
import Meta from './Meta';

const Page = ({children}) => {
  return (
    <div>
      Page
      <Meta />
      <Header />
      {children}
    </div>
  );
}

export default Page

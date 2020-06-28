import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      Nav
      <Link href="/"><a>Home</a></Link>

      <Link href="/about"><a>about</a></Link>
    </div>
  );
}

export default Nav

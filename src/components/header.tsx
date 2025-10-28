import { Navbar } from './navbar';


export const Header = () => {
  return (
    <header className='flex justify-between'>
      <a href="/">
        <img className='w-17' src="/images/logo.svg" alt="Logo" />
      </a>
      <Navbar />
    </header>
  )
}


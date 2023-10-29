import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const menu = [

    {
      name: 'Home',
      url: '/'
    },

    {
      name: 'Price',
      url: '/price'
    }

  ]

  return (
    <div className='mx-5 my-5'>
      <header className='flex items-center justify-between'>
        <div><h1>Rean Edit</h1></div>
        <div className='flex items-center'>
          {
            menu.map((menu, index) => (
              <Link to={menu.url} key={index}>
                <div className='mx-5 hover:text-sky-500 transiton-[.3s]'><h1>{menu.name}</h1></div>
              </Link>
            ))
          }
        </div>
      </header>
    </div>
  )
}

export default Navbar
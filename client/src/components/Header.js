import React from 'react'

export default function Header () {

  return (
    <div className='nav1'>
      <div className='centered'>
        <nav className='breadcrumb centered' aria-label='breadcrumbs'>
          <ul className='nav'>
            <a href='#/' className='brand-logo'>LOGO</a>
            <li><a href='#/'>Start-Sida</a></li>
            <li><a href='#/contact'>Kontakt</a></li>
            <li><a href='#/about'>Om oss</a></li>
            <li><a href='#/store'>Bästella mat HÄR</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
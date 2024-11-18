import React from 'react'
import Filter from './Filter'

export default function Header(Props) {
  return (
    <header className="header">
      <div className="logo">
        <a href="/"><img src={Props.src} alt={Props.alt}/></a>
      </div>
      <div className="toggle">
        <Filter/>
        <p className='toggleText'>{Props.logo}</p>
      </div>
    </header>
  )
}

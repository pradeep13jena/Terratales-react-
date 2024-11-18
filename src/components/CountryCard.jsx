import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard(Props) {
  return (
    <Link to={`/${Props.country}`} className='countryCard'>
      <img className='flagClass' src={Props.src} alt={Props.country + ' flag'} />
      <div className='cardText'>
        <h3 className='cardTextH3'>{Props.country}</h3>
        <p><b>Population:</b> {Props.popultaion}</p>
        <p><b>Capital:</b> {Props.capital}</p>
        <p><b>Continent:</b> {Props.continents}</p>
      </div>
    </Link>
  )
}

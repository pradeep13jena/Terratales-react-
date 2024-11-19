import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
// import datas from '../utils/worldData.js'

export default function CountriesList({query}) {
  const [datas, setDatas] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setDatas
      (data)
    )
  }, [])

  return (
    <>
      <div className="countryList">
        {datas
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                country={country.name.common}
                src={country.flags.svg}
                popultaion={country.population.toLocaleString('sen-IN')}
                continents={country['continents']}
                capital={country.capital?.[0]}
              />
            )
          })}
      </div>
    </>
  )
}
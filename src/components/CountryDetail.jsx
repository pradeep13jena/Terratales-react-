import React, { useEffect, useState } from 'react'
import "./CountryDetails.css"
import { useParams } from 'react-router-dom'

export default function CountryDetail() {
  const [Cname, Setcname] = useState(null)

  const params = useParams()
  const nameSearch = params.country

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${nameSearch}?fulltext=true`)
      .then(res => res.json())
      .then(([data]) => Setcname({
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common || 'nA',
        population: data.population,
        region: data.region,
        subregion: data.subregion || 'nA',
        capital: data.capital || 'nA',
        flag: data.flags.svg,
        tld: data.tld,
        languages: Object.values(data.languages) || 'nA',
        currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', ') || 'nA'
      })
    )
  }, [])
  
  // Cname == null? console.log('none') : console.log(Cname.languages)

  return  Cname == null ? (<h3>Loading...</h3>) : (<div className="country-details-container">
        <div className="back-button">
          <button onClick={() => history.back()}><i className="fa-solid fa-arrow-left"></i> &nbsp; Back</button>
        </div>
        <div className="country-details">
          <div className="country-image">
            <img src={Cname.flag} alt={Cname.name} />
          </div>
          <div className="country-text">
            <h1>{Cname.name}</h1>
            <div className="details-text">
              <p>
                Native Name: {Cname.nativeName}
              </p>
              <p>
                Population: {Cname.population.toLocaleString('en-IN')}
              </p>
              <p>
                Region: {Cname.region}
              </p>
              <p>
                Sub Region: {Cname.subregion}
              </p>
              <p>
                Capital: {Cname.capital}
              </p>
              <p>
                Top Level Domain: {Cname.tld}
              </p>
              <p>
                Currencies: {Cname.currencies}
              </p>
              <p>
                Languages: {Cname.languages.map((lang, index) =><span key={index}>{lang}</span>)}
              </p>
            </div>
          </div>
        </div>
      </div>)
}

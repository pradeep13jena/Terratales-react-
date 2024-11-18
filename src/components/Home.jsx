import React, {useState} from 'react'
import Search from "./Search";
import CountryList from "./CountryList";
import "./App.css";

export default function Home() {
  const [query, setQuery] = useState('')

  return (
    <>
      <div className="main">
      <Search
        setQuery={setQuery}
      />
      </div>
      <CountryList query={query} /> 
    </>
  )
}

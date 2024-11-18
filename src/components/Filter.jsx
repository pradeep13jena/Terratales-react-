import React from 'react'
import data from '../utils/worldData'
import Option from './option'

export default function Filter() {
  
  return (
    <div className="filterContainer">
      <select name="continent" id="continent">
        <Option val="Continents"/>
        <Option val="Africa"/>
        <Option val="Antarctica"/>
        <Option val="Asia"/>
        <Option val="Europe"/>
        <Option val="North America"/>
        <Option val="Oceania"/>
        <Option val="South America"/>
      </select>
    </div>
  )
}

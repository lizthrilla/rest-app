import React, { Component } from 'react'
import {Link} from 'react-router'
import data from '../data.json'

class Locations extends Component {
// NEED TO PUT IN A LOCATION.JS HERE AND LINK IN APP
  render () {
    return <div>
      <h2>Our Locations</h2>
      {data.locations.map((location, i) => {
        return <section key={i}>
          <h3><Link to={'/locations/${location.slug}'} /> {location.name}</h3>
          <p> {location.address} </p>
          <table>
            <tbody>
              {location.hours.map((period, j) => {
                return <tr key={j}>
                  <th>{period.days}</th>
                  <td>{period.hours}</td>
                </tr>
              })}
            </tbody>
          </table>
        </section>
      })}
    </div>
  }}
export default Locations

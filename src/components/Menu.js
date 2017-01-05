import React, { Component } from 'react'
import MenuSection from './MenuSection'
import data from '../data.json'

class Menu extends Component {

  render () {
    const categories = data.menu.map((category, i) => {
      return <li key={i}>{category.name}</li>
    })

    const sections = data.menu.map((category, i) => {
      return <MenuSection name={category.name} items={category.items} key={i} />
    })

    return <div>
      <h2> Our Menu </h2>

      <section className='categories'>
        <ul>
          {categories}
        </ul>
      </section>

      {sections}
    </div>
  }
}
export default Menu

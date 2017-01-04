import React, { Component } from 'react'
import menuItems from '../menu.json'

class Menu extends Component {

  render () {
    return <div>
      <h2> Our Menu </h2>

      <section className='categories'>
        <ul>
          <li>Appetizers </li>
          <li>Entrees</li>
          <li>Deserts</li>
          <li>Specials</li>
        </ul>
      </section>

      <section>
        <h3>Menu</h3>
        <table>
          <tbody>
            <tr>
              <th>Black pudding Nachos</th>
              <td>nom nom nom </td>
              <td>$$</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  }
}
export default Menu

import React, { Component } from 'react'

class Menu extends Component {

  render () {
    return <div>
      <h2> Our Menu </h2>
      <nav>
        <ul>
          <li>Appetizers </li>
          <li>Entrees</li>
          <li>Deserts</li>
          <li>Specials</li>
        </ul>
      </nav>
      <section>
        <h3>Menu</h3>
        <table>
          <tbody>
            <tr>
              <th>Scottish Nachos</th>
              <td>Classic pub chips smothered in ground beef and grilled onions cooked in gravy, queso sauce and jalapeños </td>
              <td>$$</td>
            </tr>
            <tr>
              <th>Chiles en Escocia</th>
              <td>Poblano peppers prepared like Chiles en Nogada with haggis a walnut cream sauce, but stuffed with haggis (Vegetarian option available)</td>
              <td>$$</td>
            </tr>
            <tr>
              <th>Mars Bars stuffed Sopapillas</th>
              <td>Ever had the Scottish classic deep fried Mars Bar? Instead of chippy batter we fry it in our fluffy Sopapilla dough.</td>
              <td>$</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  }
}
export default Menu

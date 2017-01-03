import React, { Component } from 'react'
import Menu from './Menu'
import Home from './Home'

class App extends Component {

  render () {
    return <div>
      <h1>Restaurant Name</h1>
      <nav>
        <ul>
          <li>
            <a href='/'> Home </a>
          </li>
          <li>
            <a href='/menu'> Menu </a>
          </li>
          <li>
            <a href='/contact'> Contact </a>
          </li>
          <li>
            <a href='/locations'> Locations </a>
          </li>
        </ul>
      </nav>
      <main>
        <Home />
        <Menu />
      </main>
      <footer>
        <p> &copy; 2017 Liz Tiller &hearts; at The Iron Yard - St Petersburg, Florida. </p>
      </footer>
    </div>
  }
}

export default App

import React, { Component } from 'react'
import Menu from './Menu'

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
        <Menu />
        <h2>A little bit about the Restaurant </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
      <footer>
        <p> &copy; 2017 Liz Tiller &hearts; at The Iron Yard - St Petersburg, Florida. </p>
      </footer>
    </div>
  }
}

export default App

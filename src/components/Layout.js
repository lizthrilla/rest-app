import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <div>
      <h1>Restaurant Name</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/menu'> Menu </Link>
          </li>
          <li>
            <Link to='/contact'> Contact </Link>
          </li>
          <li>
            <Link to='/locations'> Locations </Link>
          </li>
        </ul>
      </nav>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p> &copy; 2017 Liz Tiller &hearts; at The Iron Yard - St Petersburg, Florida. </p>
      </footer>
    </div>
  }
}

export default Layout
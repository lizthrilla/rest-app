import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Menu from './Menu'
import Locations from './Locations'
import Contact from './Contact'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Menu' component={Menu} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Locations' component={Locations} />
        {/* NEED to put the location thing in here  */}
      </Route>
    </Router>
  }
}

export default App

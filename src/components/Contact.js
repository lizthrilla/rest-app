import React, { Component } from 'react'

class Contact extends Component {

  render () {
    return <div>
      <h2>Contact Us</h2>
      <h5>Phone</h5>
      <p> 1-913-814-7728 </p>
      <h5>Email</h5>
      <p>info@thistlepoint.com</p>
      <form>
        <label>Name: </label>
        <input type='text' name='Email' />
        <label>Email: </label>
        <input type='text' name='Email' />
        <label>Message: </label>
        <input type='text' name='Email' />
        <input type='submit' />
      </form>
    </div>
  }
}

export default Contact

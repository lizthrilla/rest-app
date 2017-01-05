import React, { Component } from 'react'

class Contact extends Component {

  render () {
    return <div>
      <h2>Contact Us</h2>
      <form>
        <fieldset>
          <p>
            <label htmlFor='fullName'>Name</label>
            <input name='fullName' type='text' />
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input name='email' type='email' />
          </p>
          <p>
            <label htmlFor='message'>Message</label>
            <textarea cols='30' rows='10' />
          </p>
        </fieldset>
      </form>
      <p>You may also email us at <a href='mailto:info@thistlepoint.com'>info@thistlepoint.com</a> or call us at 1-913-814-7728</p>
    </div>
  }
}

export default Contact

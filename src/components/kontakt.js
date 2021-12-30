import React, { Component } from 'react';
import './kontakt.css';

class Kontakt extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1 className='heading'>Hilfe, Feedback oder Kontakt?</h1>
        <form>
          <input 
            type='text'
            placeholder='Name'
          />
          <br/>
          <input
            type='email' 
            placeholder='E-Mail'
          />
          <br/>
          <input 
            type='text'
            placeholder='Betreff'
          />
          <br/>
          <input 
            type='textarea'
            placeholder='Nachricht'
          />
          <br/>
          <input type="submit" value="Absenden" />
        </form>
      </div>
    )
  }
}

export default Kontakt;
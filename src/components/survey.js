import React, { Component } from 'react';
import './survey.css';

class Survey extends Component {
    /*
    1. Datum an dem mit iLL gearbeitet wurde (indirekt)
    2. Welcher Benutzer hat mit iLL gearbeitet (Bereich etc.)(indirekt)
    3. Wie lange hat die Befragung gedauert? (eventuelle Gewichtung)
    4. Welche Maschine wurde genutzt?
    5. Wie häufigt wird iLL benutzt?
    6. Warum wird die App benutzt?
    7. Welche Funktion wird benutzt?
    8. Gab es Schwierigkeiten bei der Benutzung von iLL?
    9. Wurden andere Applikationen bei der Analyse benutzt?
    10. Konnte iLL dir Helfen? (Wenn Nein, was hat dann gefehlt?, Wenn Ja, wie hat es dir geholfen und was für ein Problem wurde gelöst?)?
    11. Findest du iLL intuitiv?
    12. Was für Verbesserungsvorschläge oder Feature-Vorschläge gibt es?
    */

    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

  render() {
    return (
        <div className='wrapper'>
        <h1>Umfrage: Frage 1</h1>
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
        </div>
      );
  }
}

export default Survey;
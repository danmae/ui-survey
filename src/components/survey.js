import React, { Component } from 'react';
import './survey.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';


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
          plantid: null,
          machineid: null,
          usage_frequency: 1,
          usage_cause: null,
          usage_function: null,
          difficulties: null,
          other_apps: null,
          could_help: null,
          intuitivness: null,
          suggestion: null,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleFormSubmit(event) {
        console.log('username: ' + this.state.plantid);
        event.preventDefault();
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
          <h1 className='heading'>Umfrage - intelligent Level Learning</h1>
          <Link to='/question_one'>Befragung Starten</Link>

        </div>
      );
  }
}

export default Survey;
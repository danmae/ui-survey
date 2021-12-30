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
            <form>
              <label>
                Welche Maschine wurde genutzt?
                <input
                  name="plantid"
                  type="text"
                  placeholder='040 - Berlin'
                  value={this.state.plantid}
                  onChange={this.handleInputChange}/>
                <input 
                  name="machineid"
                  type="text"
                  placeholder='Ecoclean - 05005005050'
                  value={this.state.machineid}
                  onChange={this.handleInputChange}
                />
              </label>
              <br/>
              <label>
                Wie häufig benutzen Sie iLL?
                <input
                  name="usage_frequency"
                  type="number"
                  placeholder='5'
                  value={this.state.usage_frequency}
                  onChange={this.handleInputChange} 
                /> pro Woche
              </label>
              <br/>
              <label>
                Warum benutzen Sie iLL?
                <select
                  name="usage_cause"
                  type="text"
                  value={this.state.usage_cause}
                  onChange={this.handleInputChange}>
                  <option value="Instandhaltungsmaßnahme">Instandhaltungsmaßnahme</option>
                  <option value="Produktionsstörung">Produktionsstörung</option>
                  <option value="Monitoring">Monitoring</option>
                </select>
              </label>
              <br/>
              <label>
                Welche Funktion wurde benutzt?
                <select
                  name="usage_function"
                  type="text"
                  value={this.state.usage_function}
                  onChange={this.handleInputChange}>
                  <option value="Rohdatenplot">Rohdatenplot</option>
                  <option value="Zustandsverlauf">Zustandsverlauf</option>
                  <option value="Vorhersage">Vorhersage</option>
                </select>
              </label>
              <br/>
              <label>
                Gab es Schwierigkeiten bei der Benutzung der Applikation?
                <input
                  name="difficulties"
                  type="text"
                  value={this.state.difficulties}
                  onChange={this.handleInputChange} 
                />
              </label>
              <br/>
              <label>
                Wurden andere Applikationen bei der Analyse benutzt?
                <select
                  name="other_apps"
                  type="text"
                  value={this.state.other_apps}
                  onChange={this.handleInputChange}>
                  <option value="PRISMA">PRISMA</option>
                  <option value="IPRO">IPRO</option>
                  <option value="Grafana">Grafana</option>
                </select>
              </label>
              <br/>
              <label>
                Konnte iLL ihnen weiterhelfen?
                <input
                  name="could_help"
                  type="text"
                  value={this.state.could_help}
                  placeholder='Wenn Ja, mit welcher Funktionalität?'
                  onChange={this.handleInputChange}
                />
              </label>
              <br/>
              <label>
                Wie Intuitiv würden Sie iLL bewerten?
                <select
                  name="intuitivness"
                  type="text"
                  value={this.state.intuitivness}
                  onChange={this.handleInputChange}>
                  <option value="1">1 - gar nicht intuitiv</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5 - aktzeptabel</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10 - sehr intuitiv</option>
                </select>
              </label>
              <br/>
              <label>
                Was für Verbesserungsvorschläge oder Feature-Vorschläge gibt es?
                <input
                  name="suggestion"
                  type="text"
                  value={this.state.suggestion}
                  onChange={this.handleInputChange}
                />
              </label>
              <br/>
              <input type="submit" value="Absenden" />
            </form>
        </div>
      );
  }
}

export default Survey;
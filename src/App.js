import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Kontakt from './components/kontakt';
import Survey from './components/survey';
import Landingpage from './components/landingpage';

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Landingpage}/>
          <Route path="/survey" component={Survey}/>
          <Route path="/kontakt" component={Kontakt}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

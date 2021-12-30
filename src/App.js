import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Kontakt from './components/kontakt';
import Survey from './components/survey';
import Landingpage from './components/landingpage';
import question_one from './components/questionaire/question_one';
import question_two from './components/questionaire/question_two';
import question_three from './components/questionaire/question_three';
import question_four from './components/questionaire/question_four';
import question_five from './components/questionaire/question_five';
import question_six from './components/questionaire/question_six';
import question_seven from './components/questionaire/question_seven';
import question_eight from './components/questionaire/question_eight';
import question_nine from './components/questionaire/question_nine';
import question_ten from './components/questionaire/question_ten';
import question_eleven from './components//questionaire/question_eleven';

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Landingpage}/>
          <Route path="/survey" component={Survey}/>
          <Route path="/kontakt" component={Kontakt}/>
          <Route path="/question_one" exact component={question_one}/>
          <Route path="/question_two" component={question_two}/>
          <Route path="/question_three" component={question_three}/>
          <Route path="/question_four" component={question_four}/>
          <Route path="/question_five" component={question_five}/>
          <Route path="/question_six" component={question_six}/>
          <Route path="/question_seven" component={question_seven}/>
          <Route path="/question_eight" component={question_eight}/>
          <Route path="/question_nine" component={question_nine}/>
          <Route path="/question_ten" component={question_ten}/>
          <Route path="/question_eleven" component={question_eleven}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

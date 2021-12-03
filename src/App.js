import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="page">
      <Header />
        <div className="startscreen">
          <h1>intelligent Level Learning Feedback</h1>
          <div className="wrapper">
            <a href="#"><span>Umfrage starten</span></a>
          </div>
        </div>
    </div>
  );
}

export default App;

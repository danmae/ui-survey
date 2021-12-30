import { Link } from 'react-router-dom';
import '../App.css';

function Landingpage() {
  return (
    <div className="page">
        <div className="startscreen">
          <h1>intelligent Level Learning Feedback</h1>
          <div className="wrapper">
          <Link to='/survey'>
            <button className='button'>Umfrage starten</button>
          </Link>
          </div>
        </div>
    </div>
  );
}

export default Landingpage;

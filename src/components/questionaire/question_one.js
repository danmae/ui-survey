import { Link } from 'react-router-dom';
import '../survey.css';

function question_one() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 1</h1>
      </div>
      <div className='question_body'>
        <p>Welche Maschine wurde genutzt?</p>
      </div>
      <div className='question_link'>
        <Link to='/question_two'>Weiter</Link>
      </div>
    </div>
    </>
  );
}

export default question_one;

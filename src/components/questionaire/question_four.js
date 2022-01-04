import { Link } from 'react-router-dom';

function question_four() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 4</h1>
      </div>
      <div className='question_body'>
        <p>Welche Funktion wurde benutzt?</p>
      </div>
      <div className='question_link'>
        <Link to='/question_three'>Zurück</Link><Link to='/question_five'>Weiter</Link>
      </div>
    </div>
    </>
  );
}

export default question_four;

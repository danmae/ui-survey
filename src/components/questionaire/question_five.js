import { Link } from 'react-router-dom';

function question_five() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 5</h1>
      </div>
      <div className='question_body'>
        <p>Gab es Schwierigkeiten bei der Benutzung der Applikation?</p>
      </div>
      <div className='question_link'>
        <Link to='/question_four'>Zurück</Link><Link to='/question_six'>Weiter</Link>
      </div>
    </div>
    </>
  );
}

export default question_five;

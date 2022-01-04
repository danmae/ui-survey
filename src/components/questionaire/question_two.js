import { Link } from 'react-router-dom';

function question_two() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 2</h1>
      </div>
      <div className='question_body'>
        <p>Wie häufig benutzen Sie iLL?</p>
      </div>
      <div className='question_link'>
        <Link to='/question_one'>Zurück</Link><Link to='/question_three'>Weiter</Link>
      </div>
    </div>
    </>
  );
}

export default question_two;

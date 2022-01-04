import { Link } from 'react-router-dom';

function question_three() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 3</h1>
      </div>
      <div className='question_body'>
        <p>Warum benutzen Sie iLL?</p>
      </div>
      <div className='question_link'>
        <Link to='/question_two'>Zurück</Link><Link to='/question_four'>Weiter</Link>
      </div>
    </div>
    </>
  );
}

export default question_three;

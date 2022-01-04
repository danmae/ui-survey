import { Link } from 'react-router-dom';

function question_six() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 6</h1>
      </div>
      <div className='question_body'>
        <p>Wurden andere Applikationen bei der Analyse benutzt?</p>
      </div>
      <div className='question_link'>
        <Link to='/question_five'>Zurück</Link><Link to='/question_seven'>Weiter</Link>
      </div>
    </div>
    </>
  );
}

export default question_six;

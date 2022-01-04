import { Link } from 'react-router-dom';

function question_seven() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 7</h1>
      </div>
      <div className='question_body'>
        <p>Konnte iLL ihnen weiterhelfen?</p>
      </div>
      <div className='question_link'>
        <Link to='/question_six'>Zurück</Link><Link to='/question_eight'>Weiter</Link>
      </div>
    </div>
    </>
  );
}

export default question_seven;

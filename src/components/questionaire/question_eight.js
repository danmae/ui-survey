import { Link } from 'react-router-dom';

function question_eight() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 8</h1>
      </div>
      <div className='question_body'>
        <p>Wie Intuitiv würden Sie iLL bewerten?</p>
      </div>
      <div className='question_link'>
        <Link to='/question_seven'>Zurück</Link><Link to='/question_nine'>Weiter</Link>
      </div>
    </div>
    </>
  );
}

export default question_eight;

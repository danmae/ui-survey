import { Link } from 'react-router-dom';

function question_nine() {
  return (
    <>
    <div className='startscreen'>
      <div className='question_heading'>
        <h1>Question 9</h1>
      </div>
      <div className='question_body'>
        <p>Was für Verbesserungsvorschläge oder Feature-Vorschläge gibt es?</p>
      </div>
      <div className='question_link'>
        <Link to='/survey'>Absenden</Link>
      </div>
    </div>
    </>
  );
}

export default question_nine;

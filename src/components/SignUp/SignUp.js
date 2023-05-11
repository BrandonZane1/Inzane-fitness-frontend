import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./SignUp.scss";

function SignUp() {

  const [firstName, setFirstName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/formdata', { firstName });

      console.log('Form data saved successfully.');
      // Perform any necessary actions after successful form submission
    } catch (error) {
      console.error('Error saving form data.');
      // Handle error case if form data failed to save
    }
  }
  return (
    <div className="question-1">
      <div className="question-1__box">
        <h2 className="question-1__header">What can we call you?</h2>
        <p className="question-1__subheader">
          Were asking this to offer you a customized experience
        </p>
      </div>
      <form onSubmit={handleSubmit} className="question-1__form">
        <input
          className="question-1__input"
          type="text"
          placeholder="Enter your first name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <Link to="SignUp2">
          <button type="submit" className="question-1__submit">Next</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;

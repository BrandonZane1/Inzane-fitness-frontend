import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./SignUp2.scss";

function SignUp2() {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name } = event.target;

    setCheckboxValues((prevValues) => {
      const updatedValues = {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
      };
      return {
        ...updatedValues,
        [name]: true,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Checkbox values:", checkboxValues);

    const formData = {
      checkbox1: checkboxValues.checkbox1,
      checkbox2: checkboxValues.checkbox2,
      checkbox3: checkboxValues.checkbox3,
    };

    axios
      .post("/api/formdata", formData)
      .then(() => {
        console.log("Form data posted successfully");
        // Reset the form if needed
      })
      .catch((error) => {
        console.error("Failed to post form data", error);
        // Handle error
      });
  };
  return (
    <div>
      <h2>How experienced are you lifting weights?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          I'm New to it I'm new or have only tried it for a bit.
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxValues.checkbox1}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
         I've Lifted Before Ive lifted weights before but never stuck to a balanced routine.
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxValues.checkbox2}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          I'm Advanced Ive stuck to a balanced routine for years
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox3}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <Link to="SignUp3">
          <button type="submit">Next</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp2;

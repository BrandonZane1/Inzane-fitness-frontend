import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./SignUp3.scss";

function SignUp3() {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
  });

  const handleCheckboxChange = (event) => {
    const { name } = event.target;

    setCheckboxValues((prevValues) => {
      const updatedValues = {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
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
      checkbox4: checkboxValues.checkbox4,
      checkbox5: checkboxValues.checkbox5,
      checkbox6: checkboxValues.checkbox6,
      checkbox7: checkboxValues.checkbox7,
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
      <h2>How many days per week are you willing to workout?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          1x a week
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxValues.checkbox1}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          2x a week
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxValues.checkbox2}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          3x a week
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox3}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          4x a week
          <input
            type="checkbox"
            name="checkbox4"
            checked={checkboxValues.checkbox4}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          5x a week
          <input
            type="checkbox"
            name="checkbox5"
            checked={checkboxValues.checkbox5}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          6x a week
          <input
            type="checkbox"
            name="checkbox6"
            checked={checkboxValues.checkbox6}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          7x a week
          <input
            type="checkbox"
            name="checkbox7"
            checked={checkboxValues.checkbox7}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <Link to="SignUp4">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  )
}

export default SignUp3;

import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./SignUp4.scss";

function SignUp4() {
  const [isLoading, setIsLoading] = useState(false);
  const [displayTime, setDisplayTime] = useState(3000); // 3000 milliseconds = 3 seconds

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
    setIsLoading(true);

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

    setTimeout(() => {
      setIsLoading(false);
      // Do something else after loading is complete, e.g., transition to the next page
    }, displayTime);
  };
  return (
    <div>
      {isLoading ? (
        <div>Unleash the BEAST</div>
      ) : (
        <div className="question-4">
          <h2 className="question-4__title">
            What equipment do you have access to?
          </h2>
          <form className="question-4__container" onSubmit={handleSubmit}>
            <label className="question-4__label">
              Full Gym
              <input
                className="question-4__checkbox"
                type="checkbox"
                name="checkbox1"
                checked={checkboxValues.checkbox1}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />

            <label className="question-4__label">
              Barbells
              <input
                className="question-4__checkbox"
                type="checkbox"
                name="checkbox2"
                checked={checkboxValues.checkbox2}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />

            <label className="question-4__label">
              Dumbbells
              <input
                className="question-4__checkbox"
                type="checkbox"
                name="checkbox3"
                checked={checkboxValues.checkbox3}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />

            <label className="question-4__label">
              KettleBells
              <input
                className="question-4__checkbox"
                type="checkbox"
                name="checkbox4"
                checked={checkboxValues.checkbox4}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />

            <label className="question-4__label">
              Machines
              <input
                className="question-4__checkbox"
                type="checkbox"
                name="checkbox5"
                checked={checkboxValues.checkbox5}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />

            <label className="question-4__label">
              No Equipment
              <input
                className="question-4__checkbox"
                type="checkbox"
                name="checkbox6"
                checked={checkboxValues.checkbox6}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />

            <Link to="/Workouts">
              <button className="question-4__button" type="submit">Submit</button>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp4;

import { useState } from "react";
import "./SignUp2.scss";
import { useNavigate } from "react-router-dom";

function SignUp2() {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const navigate = useNavigate();
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
    navigate("/SignUp3");
  };

  //   const formData = {
  //     checkbox1: checkboxValues.checkbox1,
  //     checkbox2: checkboxValues.checkbox2,
  //     checkbox3: checkboxValues.checkbox3,
  //   };

  //   axios
  //     .post("/api/formdata", formData)
  //     .then(() => {
  //       console.log("Form data posted successfully");
  //       // Reset the form if needed
  //     })
  //     .catch((error) => {
  //       console.error("Failed to post form data", error);
  //       // Handle error
  //     });
  // };
  return (
    <div className="question-2">
      <h2 className="question-2__header">
        How experienced are you lifting weights?
      </h2>
      <form className="question-2__container" onSubmit={handleSubmit}>
        <label className="question-2__box">
          <p className="question-2__input">I'm New to it</p>
          <p className="question-2__input--small">
            I'm new or have only tried it for a bit.
          </p>
          <input
            className="question-2__checkbox"
            type="checkbox"
            name="checkbox1"
            checked={checkboxValues.checkbox1}
            onChange={handleCheckboxChange}
          />
        </label>

        <label className="question-2__box">
          <p className="question-2__input">I've Lifted Before</p>{" "}
          <p className="question-2__input--small">
            Ive lifted weights before but never stuck to a balanced routine.
          </p>
          <input
            className="question-2__checkbox"
            type="checkbox"
            name="checkbox2"
            checked={checkboxValues.checkbox2}
            onChange={handleCheckboxChange}
          />
        </label>

        <label className="question-2__box">
          <p className="question-2__input">I'm Advanced</p>
          <p className="question-2__input--small">
            Ive stuck to a balanced routine for years
          </p>
          <input
            className="question-2__checkbox"
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox3}
            onChange={handleCheckboxChange}
          />
        </label>

        <button
          onSubmit={handleSubmit}
          className="question-2__button"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default SignUp2;

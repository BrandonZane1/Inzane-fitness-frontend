import { useState } from "react";
import "./Day.scss";

function Day1({
  chestExercises,
  deltsExercises,
  tricepsExercises,
  weekSchema,
}) {
  const [isDay1Visible, setIsDay1Visible] = useState(false);

  const toggleDay1Visibility = () => {
    setIsDay1Visible(!isDay1Visible);
  };

  return (
    <article className="day">
      <button className="day__title" onClick={toggleDay1Visibility}>
        {isDay1Visible ? "Hide" : "Day 1"}
      </button>

      {isDay1Visible && (
        <div>
          <h3 className="quote">
            Push Day! Chest Shoulders and triceps, try supersetting a pair of
            workouts for shorter workout times and more burn!
          </h3>
          {chestExercises.map((exercise) => (
            <div className="card" key={exercise.id}>
              <img
                className="card__gif"
                src={exercise.gifUrl}
                alt="animation"
              ></img>
              <p className="card__name">
                {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
              </p>
              <p className="card__schema">{weekSchema}</p>
              <p className="card__target">
                {exercise.target.charAt(0).toUpperCase() +
                  exercise.target.slice(1)}
              </p>
            </div>
          ))}

          {deltsExercises.map((exercise) => (
            <div className="card" key={exercise.id}>
              <img
                className="card__gif"
                src={exercise.gifUrl}
                alt="animation"
              ></img>
              <p className="card__name">
                {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
              </p>
              <p className="card__schema">{weekSchema}</p>
              <p className="card__target">
                {exercise.target.charAt(0).toUpperCase() +
                  exercise.target.slice(1)}
              </p>
            </div>
          ))}

          {tricepsExercises.map((exercise) => (
            <div className="card" key={exercise.id}>
              <img
                className="card__gif"
                src={exercise.gifUrl}
                alt="animation"
              ></img>
              <p className="card__name">
                {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
              </p>
              <p className="card__schema">{weekSchema}</p>
              <p className="card__target">
                {exercise.target.charAt(0).toUpperCase() +
                  exercise.target.slice(1)}
              </p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default Day1;

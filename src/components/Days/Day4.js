import { useState } from "react";
import "./Day.scss";

function Day4({
  chestExercises,
  deltsExercises,
  tricepsExercises,
  weekSchema,
}) {
  const [isDay4Visible, setIsDay4Visible] = useState(false);

  const toggleDay4Visibility = () => {
    setIsDay4Visible(!isDay4Visible);
  };

  return (
    <article className="day">
      <button className="day__title" onClick={toggleDay4Visibility}>
        {isDay4Visible ? "Hide" : "Day 4"}
      </button>

      {isDay4Visible && (
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

export default Day4;

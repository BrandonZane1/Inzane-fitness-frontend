import { useState } from "react";
import "./Day.scss";

function Day2({
  latsExercises,
  upperBackExercises,
  bicepsExercises,
  weekSchema,
}) {
  const [isDay2Visible, setIsDay2Visible] = useState(false);

  const toggleDay2Visibility = () => {
    setIsDay2Visible(!isDay2Visible);
  };

  return (
    <article className="day">
      <button className="day__title" onClick={toggleDay2Visibility}>
        {isDay2Visible ? "Hide" : "Day 2"}
      </button>

      {isDay2Visible && (
        <div>
          <h3 className="quote">
            Pull Day! Back and Biceps, try supersetting a pair of workouts for
            shorter workout times and more burn!
          </h3>
          {latsExercises.map((exercise) => (
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

          {upperBackExercises.map((exercise) => (
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

          {bicepsExercises.map((exercise) => (
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

export default Day2;

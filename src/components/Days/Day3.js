import { useState } from "react";
import "./Day.scss";

function Day3({
  quadsExercises,
  hamstringsExercises,
  calvesExercises,
  weekSchema,
}) {
  const [isDay3Visible, setIsDay3Visible] = useState(false);

  const toggleDay3Visibility = () => {
    setIsDay3Visible(!isDay3Visible);
  };

  return (
    <article className="day">
      <button className="day__title" onClick={toggleDay3Visibility}>
        {isDay3Visible ? "Hide" : "Day 3"}
      </button>

      {isDay3Visible && (
        <div>
          <h3 className="quote">
            Leg Day! Hamstrings Quads and Calves, try supersetting a pair of
            workouts for shorter workout times and more burn!
          </h3>
          {quadsExercises.map((exercise) => (
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

          {hamstringsExercises.map((exercise) => (
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

          {calvesExercises.map((exercise) => (
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

export default Day3;

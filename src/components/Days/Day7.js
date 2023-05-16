import { useState } from "react";
import "./Day.scss";

function Day7({ cardioExercises, weekSchema }) {
  const [isDay7Visible, setIsDay7Visible] = useState(false);

  const toggleDay7Visibility = () => {
    setIsDay7Visible(!isDay7Visible);
  };

  return (
    <article className="day">
      <button className="day__title" onClick={toggleDay7Visibility}>
        {isDay7Visible ? "Hide" : "Day 7"}
      </button>

      {isDay7Visible && (
        <div>
          {cardioExercises.map((exercise) => (
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

export default Day7;

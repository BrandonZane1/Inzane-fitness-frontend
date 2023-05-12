import "./Week1.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': '67db53e20dmsh96252a3a28047e0p138657jsnbd1a0e3ff51b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };

function Week1() {

    const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const allExercises = response.data;
        const randomExercises = getRandomExercises(allExercises, 10);
        setExercises(randomExercises);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getRandomExercises = (exercises, count) => {
    const shuffledExercises = exercises.sort(() => 0.5 - Math.random());
    return shuffledExercises.slice(0, count);
  };
  return (
    <div>
    <p>increase weight every week</p>
      <article>
        <h2>Day 1</h2>
        <div>
          <h3>Exercise</h3>
          <h3>Sets</h3>
          <h3>Reps</h3>
          <h3>Target Muscle</h3>
        </div>
        {exercises.map((exercise) => (
            <div key={exercise.id}>{exercise.name}  {exercise.bodyPart} <img src={exercise.gifUrl} alt="animation"></img></div>
          ))}
      </article>
      <article>
        <h2>Day 2</h2>
        <div>
          <h3>Exercise</h3>
          <h3>Sets</h3>
          <h3>Reps</h3>
          <h3>Target Muscle</h3>
        </div>
      </article>
      <article>
        <h2>Day 3</h2>
        <div>
          <h3>Exercise</h3>
          <h3>Sets</h3>
          <h3>Reps</h3>
          <h3>Target Muscle</h3>
        </div>
      </article>
      <article>
        <h2>Day 4</h2>
        <div>
          <h3>Exercise</h3>
          <h3>Sets</h3>
          <h3>Reps</h3>
          <h3>Target Muscle</h3>
        </div>
      </article>
      <article>
        <h2>Day 5</h2>
        <div>
          <h3>Exercise</h3>
          <h3>Sets</h3>
          <h3>Reps</h3>
          <h3>Target Muscle</h3>
        </div>
      </article>
      <article>
        <h2>Day 6</h2>
        <div>
          <h3>Exercise</h3>
          <h3>Sets</h3>
          <h3>Reps</h3>
          <h3>Target Muscle</h3>
        </div>
      </article>
      <article>
        <h2>Day 7</h2>
        <div>
          <h3>Exercise</h3>
          <h3>Sets</h3>
          <h3>Reps</h3>
          <h3>Target Muscle</h3>
        </div>
      </article>
    </div>
  );
}

export default Week1;

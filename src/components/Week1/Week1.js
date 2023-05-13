import "./Week1.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": "67db53e20dmsh96252a3a28047e0p138657jsnbd1a0e3ff51b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

function Week1() {
  const [exercises, setExercises] = useState([]);
  const [chestExercises, setChestExercises] = useState([]);
  const [deltsExercises, setDeltsExercises] = useState([]);
  const [tricepsExercises, setTricepsExercises] = useState([]);
  const [latsExercises, setLatsExercises] = useState([]);
  const [upperBackExercises, setUpperBackExercises] = useState([]);
  const [bicepsExercises, setBicepsExercises] = useState([]);
  const [hamstringsExercises, setHamstringsExercises] = useState([]);
  const [quadsExercises, setQuadsExercises] = useState([]);
  const [calvesExercises, setCalvesExercises] = useState([]);
  const [cardioExercises, setCardioExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const exercises = response.data;

        //get chest workouts
        const chestExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "chest"
        );

        const randomChestExercises = getRandomExercises(chestExercises, 4);
        setChestExercises(randomChestExercises);

        //get delts workouts
        const deltsExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "delts"
        );

        const randomDeltsExercises = getRandomExercises(deltsExercises, 4);
        setDeltsExercises(randomDeltsExercises);

        //get triceps workouts
        const tricepsExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "triceps"
        );

        const randomTricepsExercises = getRandomExercises(tricepsExercises, 4);
        setTricepsExercises(randomTricepsExercises);

        // get lats workouts
        const latsExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "lats"
        );

        const randomLatsExercises = getRandomExercises(latsExercises, 4);
        setLatsExercises(randomLatsExercises);

        //get upper back workouts
        const upperBackExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "upper back"
        );

        const randomUpperBackExercises = getRandomExercises(
          upperBackExercises,
          4
        );
        setUpperBackExercises(randomUpperBackExercises);

        //get biceps workouts
        const bicepsExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "biceps"
        );

        const randomBicepsExercises = getRandomExercises(bicepsExercises, 4);
        setBicepsExercises(randomBicepsExercises);

        //get hamstrings workouts
        const hamstringsExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "hamstrings"
        );

        const randomHamstringsExercises = getRandomExercises(
          hamstringsExercises,
          4
        );
        setHamstringsExercises(randomHamstringsExercises);

        //get quad workouts
        const quadsExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "quads"
        );

        const randomQuadsExercises = getRandomExercises(quadsExercises, 4);
        setQuadsExercises(randomQuadsExercises);

        //get calves workouts
        const calvesExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "calves"
        );

        const randomCalvesExercises = getRandomExercises(calvesExercises, 4);
        setCalvesExercises(randomCalvesExercises);

        //get cardio workouts
        const cardioExercises = exercises.filter(
          (exercise) => exercise.bodyPart === "cardiovascular system"
        );

        const randomCardioExercises = getRandomExercises(cardioExercises, 4);
        setCardioExercises(randomCardioExercises);

        const randomExercises = getRandomExercises(exercises, 10);
        setExercises(randomExercises);
        console.log(response.data);
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
      <article>
        <h2>Day 1</h2>
        <div>
          <h3>Exercise</h3>
          <h3>Sets</h3>
          <h3>Reps</h3>
          <h3>Target Muscle</h3>
        </div>
        {chestExercises.map((exercise) => (
          <div key={exercise.id}>
            <img src={exercise.gifUrl} alt="animation"></img>
            <p>{exercise.name}</p> <p>{exercise.bodyPart}</p>{" "}
          </div>
        ))}
        <div>
          {deltsExercises.map((exercise) => (
            <div key={exercise.id}>
              <img src={exercise.gifUrl} alt="animation"></img>
              {exercise.name} {exercise.bodyPart}{" "}
            </div>
          ))}
        </div>
        {tricepsExercises.map((exercise) => (
          <div key={exercise.id}>
            <img src={exercise.gifUrl} alt="animation"></img>
            {exercise.name} {exercise.bodyPart}{" "}
          </div>
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

import "./Week2.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Day1 from "../Days/Day1";
import Day2 from "../Days/Day2";
import Day3 from "../Days/Day3";
import Day4 from "../Days/Day4";
import Day5 from "../Days/Day5";
import Day6 from "../Days/Day6";
import Day7 from "../Days/Day7";

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Key": "67db53e20dmsh96252a3a28047e0p138657jsnbd1a0e3ff51b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

function Week2() {
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
  const weekSchema = '3 sets by 10-12 reps'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const exercises = response.data;

        //get chest workouts
        const chestExercises = exercises.filter(
          (exercise) => exercise.target === "pectorals"
        );

        const randomChestExercises = getRandomExercises(chestExercises, 4);
        setChestExercises(randomChestExercises);

        console.log(chestExercises);

        //get delts workouts
        const deltsExercises = exercises.filter(
          (exercise) => exercise.target === "delts"
        );

        const randomDeltsExercises = getRandomExercises(deltsExercises, 4);
        setDeltsExercises(randomDeltsExercises);

        console.log(deltsExercises);

        //get triceps workouts
        const tricepsExercises = exercises.filter(
          (exercise) => exercise.target === "triceps"
        );

        const randomTricepsExercises = getRandomExercises(tricepsExercises, 4);
        setTricepsExercises(randomTricepsExercises);

        // get lats workouts
        const latsExercises = exercises.filter(
          (exercise) => exercise.target === "lats"
        );

        const randomLatsExercises = getRandomExercises(latsExercises, 4);
        setLatsExercises(randomLatsExercises);

        console.log(latsExercises);

        //get upper back workouts
        const upperBackExercises = exercises.filter(
          (exercise) => exercise.target === "upper back"
        );

        const randomUpperBackExercises = getRandomExercises(
          upperBackExercises,
          4
        );
        setUpperBackExercises(randomUpperBackExercises);

        //get biceps workouts
        const bicepsExercises = exercises.filter(
          (exercise) => exercise.target === "biceps"
        );

        const randomBicepsExercises = getRandomExercises(bicepsExercises, 4);
        setBicepsExercises(randomBicepsExercises);

        //get hamstrings workouts
        const hamstringsExercises = exercises.filter(
          (exercise) => exercise.target === "hamstrings"
        );

        const randomHamstringsExercises = getRandomExercises(
          hamstringsExercises,
          4
        );
        setHamstringsExercises(randomHamstringsExercises);

        //get quad workouts
        const quadsExercises = exercises.filter(
          (exercise) => exercise.target === "quads"
        );

        const randomQuadsExercises = getRandomExercises(quadsExercises, 4);
        setQuadsExercises(randomQuadsExercises);

        //get calves workouts
        const calvesExercises = exercises.filter(
          (exercise) => exercise.target === "calves"
        );

        const randomCalvesExercises = getRandomExercises(calvesExercises, 4);
        setCalvesExercises(randomCalvesExercises);

        //get cardio workouts
        const cardioExercises = exercises.filter(
          (exercise) => exercise.target === "cardiovascular system"
        );

        const randomCardioExercises = getRandomExercises(cardioExercises, 4);
        setCardioExercises(randomCardioExercises);
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
    <div className="week-1">
      <Day1
        chestExercises={chestExercises}
        deltsExercises={deltsExercises}
        tricepsExercises={tricepsExercises}
        weekSchema={weekSchema}
      />
      <Day2
        upperBackExercises={upperBackExercises}
        latsExercises={latsExercises}
        bicepsExercises={bicepsExercises}
        weekSchema={weekSchema}
      />
      <Day3
        quadsExercises={quadsExercises}
        hamstringsExercises={hamstringsExercises}
        calvesExercises={calvesExercises}
        weekSchema={weekSchema}
      />
      <Day4
        chestExercises={chestExercises}
        deltsExercises={deltsExercises}
        tricepsExercises={tricepsExercises}
        weekSchema={weekSchema}
      />
      <Day5
        upperBackExercises={upperBackExercises}
        latsExercises={latsExercises}
        bicepsExercises={bicepsExercises}
        weekSchema={weekSchema}
      />

      <Day6
        quadsExercises={quadsExercises}
        hamstringsExercises={hamstringsExercises}
        calvesExercises={calvesExercises}
        weekSchema={weekSchema}
      />
      <Day7
      cardioExercises={cardioExercises}
      weekSchema={weekSchema}
      />
    </div>
  );
}


export default Week2;

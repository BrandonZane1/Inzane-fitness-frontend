import "./Week1.scss";
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

function Week1() {
  const [numDays, setNumDays] = useState(5);
  const [form2Data, setForm2Data] = useState([]);
  const [form3Data, setForm3Data] = useState([]);
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
  const weekSchema = "3 sets by 12-15 reps";
  const [desiredEquipment, setDesiredEquipment] = useState();

  const fetchAllForm3Data = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/form3");
      const formData3 = response.data;
      setForm3Data(formData3);

      const lastIndex = formData3.length - 1;
      const lastElement = formData3[lastIndex];

      const checkboxValueWithString = Object.entries(lastElement).find(
        ([key, value]) =>
          key !== "_id" && typeof value === "string" && isNaN(value)
      );

      const desiredEquipment = checkboxValueWithString
        ? checkboxValueWithString[1]
        : null;

      setDesiredEquipment(desiredEquipment);
    } catch (error) {
      console.error("Error fetching Form3 data:", error);
    }
  };

  useEffect(() => {
    fetchAllForm3Data();
  }, []);

  const fetchAllForm2Data = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/form2");
      const formData2 = response.data;
      setForm2Data(formData2);

      const lastIndex = formData2.length - 1;
      const lastElement = formData2[lastIndex];

      const values = Object.values(lastElement);
      const selectedValue = values.find((value) => value !== 0 && value < 10);

      let updatedNumDays = selectedValue;

      setNumDays(updatedNumDays);
    } catch (error) {
      console.error("Error fetching Form2 data:", error);
    }
  };

  useEffect(() => {
    fetchAllForm2Data();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const exercises = response.data;

        //get chest workouts
        const chestExercises = exercises.filter((exercise) => {
          return (
            exercise.target === "pectorals" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
          );
        });

        const randomChestExercises = getRandomExercises(chestExercises, 4);
        setChestExercises(randomChestExercises);

        //get delts workouts
        const deltsExercises = exercises.filter(
          (exercise) =>
            exercise.target === "delts" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomDeltsExercises = getRandomExercises(deltsExercises, 4);
        setDeltsExercises(randomDeltsExercises);

        //get triceps workouts
        const tricepsExercises = exercises.filter(
          (exercise) =>
            exercise.target === "triceps" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomTricepsExercises = getRandomExercises(tricepsExercises, 4);
        setTricepsExercises(randomTricepsExercises);

        // get lats workouts
        const latsExercises = exercises.filter(
          (exercise) =>
            exercise.target === "lats" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomLatsExercises = getRandomExercises(latsExercises, 4);
        setLatsExercises(randomLatsExercises);

        //get upper back workouts
        const upperBackExercises = exercises.filter(
          (exercise) =>
            exercise.target === "upper back" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomUpperBackExercises = getRandomExercises(
          upperBackExercises,
          4
        );
        setUpperBackExercises(randomUpperBackExercises);

        //get biceps workouts
        const bicepsExercises = exercises.filter(
          (exercise) =>
            exercise.target === "biceps" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomBicepsExercises = getRandomExercises(bicepsExercises, 4);
        setBicepsExercises(randomBicepsExercises);

        //get hamstrings workouts
        const hamstringsExercises = exercises.filter(
          (exercise) =>
            exercise.target === "hamstrings" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomHamstringsExercises = getRandomExercises(
          hamstringsExercises,
          4
        );
        setHamstringsExercises(randomHamstringsExercises);

        //get quad workouts
        const quadsExercises = exercises.filter(
          (exercise) =>
            exercise.target === "quads" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomQuadsExercises = getRandomExercises(quadsExercises, 4);
        setQuadsExercises(randomQuadsExercises);

        //get calves workouts
        const calvesExercises = exercises.filter(
          (exercise) =>
            exercise.target === "calves" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomCalvesExercises = getRandomExercises(calvesExercises, 4);
        setCalvesExercises(randomCalvesExercises);

        //get cardio workouts
        const cardioExercises = exercises.filter(
          (exercise) =>
            exercise.target === "cardiovascular system" &&
            (desiredEquipment === "all" ||
              exercise.equipment === desiredEquipment)
        );

        const randomCardioExercises = getRandomExercises(cardioExercises, 4);
        setCardioExercises(randomCardioExercises);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [desiredEquipment]);

  const getRandomExercises = (exercises, count) => {
    const shuffledExercises = exercises.sort(() => 0.5 - Math.random());
    return shuffledExercises.slice(0, count);
  };
  return (
    <div className="week-1">
      <h3 className="week-1__quote"> Week One! Lets Pump those weights!</h3>
      {numDays >= 1 && (
        <Day1
          chestExercises={chestExercises}
          deltsExercises={deltsExercises}
          tricepsExercises={tricepsExercises}
          weekSchema={weekSchema}
        />
      )}
      {numDays >= 2 && (
        <Day2
          upperBackExercises={upperBackExercises}
          latsExercises={latsExercises}
          bicepsExercises={bicepsExercises}
          weekSchema={weekSchema}
        />
      )}
      {numDays >= 3 && (
        <Day3
          quadsExercises={quadsExercises}
          hamstringsExercises={hamstringsExercises}
          calvesExercises={calvesExercises}
          weekSchema={weekSchema}
        />
      )}
      {numDays >= 4 && (
        <Day4
          chestExercises={chestExercises}
          deltsExercises={deltsExercises}
          tricepsExercises={tricepsExercises}
          weekSchema={weekSchema}
        />
      )}
      {numDays >= 5 && (
        <Day5
          upperBackExercises={upperBackExercises}
          latsExercises={latsExercises}
          bicepsExercises={bicepsExercises}
          weekSchema={weekSchema}
        />
      )}
      {numDays >= 6 && (
        <Day6
          quadsExercises={quadsExercises}
          hamstringsExercises={hamstringsExercises}
          calvesExercises={calvesExercises}
          weekSchema={weekSchema}
        />
      )}
      {numDays >= 7 && (
        <Day7 cardioExercises={cardioExercises} weekSchema={weekSchema} />
      )}
    </div>
  );
}

export default Week1;

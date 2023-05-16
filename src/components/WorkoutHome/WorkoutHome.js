import { Link } from "react-router-dom";
import "./WorkoutHome.scss";


function WorkoutHome() {
  return (
    <div className="nav">
    <p className="nav__title">Click on a Week and commence Greatness!</p>
     <Link className="nav__week" to="Week1">Week 1</Link>
     <Link className="nav__week" to="Week2">Week 2</Link>
     <Link className="nav__week" to="Week3">Week 3</Link>
     <Link className="nav__week" to="Week4">Week 4</Link>
      </div>
  );
}

export default WorkoutHome;

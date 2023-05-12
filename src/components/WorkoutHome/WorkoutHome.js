import { Link } from "react-router-dom";
import "./WorkoutHome.scss";


function WorkoutHome() {
  return (
    <div>
     <Link to="Week1">Week 1</Link>
     <Link to="Week2">Week 2</Link>
     <Link to="Week3">Week 3</Link>
     <Link to="Week4">Week 4</Link>
      </div>
  );
}

export default WorkoutHome;

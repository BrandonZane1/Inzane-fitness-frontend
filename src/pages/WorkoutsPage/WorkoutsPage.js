import Week1 from "../../components/Week1/Week1";
import Week2 from "../../components/Week2/Week2";
import Week3 from "../../components/Week3/Week3";
import Week4 from "../../components/Week4/Week4";
import WorkoutHome from "../../components/WorkoutHome/WorkoutHome";
import "./WorkoutsPage.scss";
import { Routes, Route } from "react-router-dom";

function WorkoutsPage() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<WorkoutHome />} />
        <Route path="Week1" element={<Week1 />} />
        <Route path="/Week2" element={<Week2 />} />
        <Route path="/Week3" element={<Week3 />} />
        <Route path="/Week4" element={<Week4 />} />
      </Routes>
    </div>
  );
}

export default WorkoutsPage;

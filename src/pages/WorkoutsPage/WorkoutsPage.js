import WorkoutHome from '../../components/WorkoutHome/WorkoutHome';
import './WorkoutsPage.scss';
import { Routes, Route } from "react-router-dom";

function WorkoutsPage() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<WorkoutHome/>} />
    </Routes>
    </div>
  );
}

export default WorkoutsPage;
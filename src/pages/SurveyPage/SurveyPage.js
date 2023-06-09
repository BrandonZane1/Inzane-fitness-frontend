import "./SurveyPage.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import SignUp from "../../components/SignUp/SignUp";
import SignUp2 from "../../components/SignUp2/SignUp2";
import SignUp3 from "../../components/SignUp3/SignUp3";
import SignUp4 from "../../components/SignUp4/SignUp4";
import WorkoutsPage from "../WorkoutsPage/WorkoutsPage";

function SurveyPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/SignUp3" element={<SignUp3 />} />
        <Route path="/SignUp4" element={<SignUp4 />} />
        <Route path="/Workouts" element={<WorkoutsPage />} />
      </Routes>
    </div>
  );
}

export default SurveyPage;

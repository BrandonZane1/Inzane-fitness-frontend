import "./SurveyPage.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import SignUp from "../../components/SignUp/SignUp";

function SurveyPage() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default SurveyPage;

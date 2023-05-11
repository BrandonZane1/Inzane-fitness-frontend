import "./SurveyPage.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import SignUp from "../../components/SignUp/SignUp";
import SignUp2 from "../../components/SignUp2/SignUp2";
import SignUp3 from "../../components/SignUp3/SignUp3";
import SignUp4 from "../../components/SignUp4/SignUp4";

function SurveyPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="SignUp/SignUp2" element={<SignUp2 />} />
        <Route path="SignUp/SignUp2/SignUp3" element={<SignUp3 />} />
        <Route path="SignUp/SignUp2/SignUp3/SignUp4" element={<SignUp4 />} />
      </Routes>
    </div>
  );
}

export default SurveyPage;

import "./SurveyPage.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import SignUp from "../../components/SignUp/SignUp";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function SurveyPage() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
      <Footer/>
   </div> 
  );
}

export default SurveyPage;

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import WorkoutsPage from "./pages/WorkoutsPage/WorkoutsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element=<SurveyPage /> />
          <Route path="/workouts/*" element=<WorkoutsPage /> />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

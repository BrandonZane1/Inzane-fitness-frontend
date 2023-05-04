import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyPage from './pages/SurveyPage/SurveyPage';
import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element=<SurveyPage/> />
    <Route path="/workouts" element=<WorkoutsPage/> />
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;

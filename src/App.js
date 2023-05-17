import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Login/Login";
import Layouts from "./Components/Main/Layouts";
import TeamDas from "./Components/Pages/TeamDashboard/TeamDas";
import Workout from "./Components/Pages/Workouts/workOutPage/Workout";
import CreateWorkOut from "./Components/Pages/Workouts/createWork/CreateWorkOut";
import AddExercisesModal from "./Components/Pages/Workouts/addExercises/AddExercisesModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main/*" element={<Layouts />}>
            <Route path="dashboard" element={<TeamDas />} />
            <Route path="workout" element={<Workout />} />
            <Route path="createworkout" element={<CreateWorkOut />} />
            <Route path="modal" element={<AddExercisesModal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

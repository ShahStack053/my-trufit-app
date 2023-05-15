import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Layouts from "./Components/Main/Layouts";
import TeamDas from "./Components/Pages/TeamDashboard/TeamDas";
import Main from "./Components/newMain/Main";
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
          <Route path="/lay/*" element={<Main />}>
            <Route path="das" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

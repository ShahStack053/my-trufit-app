import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Layouts from "./Components/Main/Layouts";
import TeamDas from "./Components/Pages/TeamDashboard/TeamDas";
import Main from "./Components/newMain/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main/*" element={<Layouts />}>
            <Route path="dashboard" element={<TeamDas />} />
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

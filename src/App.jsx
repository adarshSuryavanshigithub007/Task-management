import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Dashboard from "./views/dashboard/Dashboard";
import Projects from "./views/admin/Projects";
import AdminNavbar from "./layout/AdminNavbar";
import AssignProjects from "./views/users/AssignProjects";
import TaskManagement from "./views/users/TaskManagement";



function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        {/* <AdminNavbar/> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/assignprojects" element= {<AssignProjects/>}/>
          <Route exact path="/task" element = {<TaskManagement/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

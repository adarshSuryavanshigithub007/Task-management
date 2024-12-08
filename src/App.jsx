import "./App.css";
import Navbar from "./layout/Navbar";
// import Login from "./authentication/Login";
// import Register from "./authentication/Register";
import AddTeacher from "./views/admin/AddTeacher";

function App() {
  return (
    <div>
      <Navbar/>
      <AddTeacher />
      {/* <Register />
      <Login/> */}
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./layout/Navbar";
// import Login from "./authentication/Login";
// import Register from "./authentication/Register";
// import AddTeacher from "./views/admin/AddTeacher";
import AllTeachers from "./views/users/AllTeachers";

function App() {
  return (
    <div>
      <Navbar/>
      <AllTeachers/>
      {/* <AddTeacher /> */}
      {/* <Register />
      <Login/> */}
    </div>
  );
}

export default App;

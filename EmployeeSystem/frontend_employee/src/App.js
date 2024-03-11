import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/navbar";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from "./Component/EditUser";
import ViewUser from "./Component/ViewUser";
import AddUser from "./Component/AddUser";
import ImageUpload from "./Component/Imageuplod";



function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exit path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/ImageUpload" element={<ImageUpload/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

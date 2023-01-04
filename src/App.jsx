import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import Home from "./components/frontend/Home";
import Registration from "./components/frontend/Registration";
import Login from "./components/frontend/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<MasterLayout />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/profile" element={<Profile />}></Route>
          <Route path="/register" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>



        </Routes>
      </Router>
     
          
          
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin" element={<MasterLayout />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/profile" element={<Profile />}></Route>



        </Routes>
      </Router>
     
          
          
    </div>
  );
}

export default App;

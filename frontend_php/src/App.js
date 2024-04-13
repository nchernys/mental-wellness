import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";
import Navigation from "./navigation";
import AddTeam from "./admin/addTeam";
import AddBlog from "./admin/addBlog";
import MainPage from "./mainPage";
import AdminDashboard from "./admin/adminDashboard";
import AllTeam from "./admin/allTeam";
import EditTeamMember from "./admin/editTeamMember";
import OneTeamMember from "./oneTeamMember";
import AllTeamPage from "./team/allTeamPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/our-team-members/:currentId"
          element={<OneTeamMember />}
        />
        <Route path="/team" element={<AllTeamPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-all-team" element={<AllTeam />} />
        <Route path="/admin-add-team" element={<AddTeam />} />
        <Route path="/admin-add-blog" element={<AddBlog />} />
        <Route path="/admin-edit-team/:id" element={<EditTeamMember />} />
      </Routes>
    </Router>
  );
}

export default App;

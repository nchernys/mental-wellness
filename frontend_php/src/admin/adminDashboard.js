import { Link } from "react-router-dom";
import AdminNavigation from "./adminNavigation";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavigation />
      <div class="dashboard-section">
        <div className="admin-dashboard-super-heading">Admin Dashboard</div>
        <div className="admin-dashboard-heading">Our Team</div>
        <Link className="admin-dashboard-link" to="/admin-all-team">
          View all team members
        </Link>
        <Link className="admin-dashboard-link" to="/admin-add-team">
          Add team members
        </Link>
        <div className="admin-dashboard-heading">Our research</div>
        <Link className="admin-dashboard-link">View all research entries</Link>
        Add research entries
        <div className="admin-dashboard-heading">Our Events</div>
        <Link className="admin-dashboard-link">View all blog entries</Link>
        Add blog entries
      </div>
    </>
  );
};

export default AdminDashboard;

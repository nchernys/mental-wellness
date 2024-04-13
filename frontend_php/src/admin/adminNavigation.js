import { Link } from "react-router-dom";

const AdminNavigation = () => {
  return (
    <div className="admin-nav">
      <Link to="/">Main</Link>
      <Link to="/admin-dashboard">Admin Dashboard</Link>
    </div>
  );
};

export default AdminNavigation;

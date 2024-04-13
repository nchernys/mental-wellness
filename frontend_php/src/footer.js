import AddTeam from "./admin/addTeam";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <Link to="/admin-dashboard">Admin</Link>
      </footer>
    </>
  );
};

export default Footer;

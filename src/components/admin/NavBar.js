import { Link } from "react-router-dom";
import Login from "./Login";

const NavBar = ({ submitted, setSubmitted }) => {
  const logout = () => {
    console.log("saindo ....");
    localStorage.removeItem("jwtToken");
    setSubmitted(false);
  };

  return (
    <nav className="container navbar navbar-expand navbar-dark bg-dark">
      <h1 className="navbar-brand">Landing page admin</h1>
      {submitted ? (
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/admin/leads" className="nav-link">
              Leads
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/excel" className="nav-link">
              Export to excel
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={logout} className="nav-link" to={""}>
              Sair
            </Link>
          </li>
        </div>
      ) : (
        <Login setSubmitted={setSubmitted} />
      )}
    </nav>
  );
};

export default NavBar;

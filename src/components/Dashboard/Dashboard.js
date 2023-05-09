import { Link } from "react-router-dom";
import "./Dashboard.scss";
import WebsiteName from "../../assets/Icons/logo.png";

function DashBoard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Welcome to the Future of Fitness.</h1>
        <img
          className="dashboard__name"
          src={WebsiteName}
          alt="Inzane Fitness"
        ></img>
      </div>
      <div className="dashboard__content-box">
        <p className="dashboard__motto">Train InZane or remain the Same</p>
        <Link className="dashboard__sign-up" to="/SignUp">
          Lets Get started
        </Link>
        <Link className="dashboard__log-in" to="/LogIn">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;

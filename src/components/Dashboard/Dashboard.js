import { Link } from "react-router-dom";
import "./Dashboard.scss";


function DashBoard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Welcome to the Future of Fitness.</h1>

      </div>
      <div className="dashboard__content-box">
        <p className="dashboard__motto">Train InZane or remain the Same</p>
        <Link className="dashboard__sign-up" to="SignUp">
          I'M NEW
        </Link>
        <Link className="dashboard__log-in" to="/LogIn">
          I'VE SUBSCRIBED
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;

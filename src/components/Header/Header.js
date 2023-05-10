import "./Header.scss";
import Logo from "../../assets/Icons/DumbbellLogo.png";


function Header() {
  return (
    <div className="header">
      <image className="header__logo" src={Logo} alt="logo"></image>
      <h1
      className="header__name"
    >In<span>Zane</span> Fitness</h1>
      </div>
  );
}

export default Header;

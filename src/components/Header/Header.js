import "./Header.scss";
import Logo from "../../assets/Icons/DumbbellLogo.png";

function Header() {
  return (
    <div className="header">
      <image className="header__logo" src={Logo} alt="logo"></image>
    </div>
  );
}

export default Header;

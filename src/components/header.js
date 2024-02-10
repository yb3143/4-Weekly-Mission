import "../css/home.css";
import logo from "../image/logo.svg";
import User from "../api";

function Header() {
  return (
    <>
      <header className="top">
        <nav id="top_div">
          <img className="logo_img" src={logo} alt="로고 이미지" />
          <a className="login_btn btn" href="./">
            로그인
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MainLogo from "../img/logo.png";
import ProFileImg from "../img/profile.svg";
import SettingImg from "../img/settings.png";
import SaveListImg from "../img/save-list.png";
import LogOutImg from "../img/logout.png";

function Header() {
  return (
    <section id="header">
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={MainLogo} title="PTPO" alt="PTPO"></img>
          </Link>
        </div>
        <div className="header-items">
          <div className="dropdown">
            <div className="header-item font-style">포트폴리오</div>
            <div className="dropdown-item font-style">
              <Link to="/">기업체</Link>
              <Link to="/">대회</Link>
              <Link to="/">프로젝트</Link>
              <Link to="/">공부</Link>
            </div>
          </div>
          <div className="dropdown">
            <div className="header-item font-style">대회</div>
            <div className="dropdown-item">
              <Link to="/">Link1</Link>
              <Link to="/">Link1</Link>
              <Link to="/">Link1</Link>
              <Link to="/">Link1</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="/rank" className="link-header-item">
              <div className="header-item font-style">랭킹</div>
            </Link>
          </div>
          <div className="dropdown">
            <div className="header-profile">
              <img src="" className="header-profile-img" />
            </div>
            <div className="dropdown-item dropdown-item-profile font-style">
              <Link to="/myProfile" className="profile-item">
                <img src={ProFileImg} className="profile-item-img" />
                <div className="profile-item-name">프로필</div>
              </Link>
              <Link to="">
                <img src={SaveListImg} className="profile-item-img" />
                <div className="profile-item-name">저장목록</div>
              </Link>
              <Link to="">
                <img src={SettingImg} className="profile-item-img" />
                <div className="profile-item-name">설정</div>
              </Link>
              <Link to="">
                <img src={LogOutImg} className="profile-item-img" />
                <div className="profile-item-name">로그아웃</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

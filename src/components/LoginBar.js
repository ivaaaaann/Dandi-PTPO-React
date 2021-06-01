import React from "react";
import "./LoginBar.css";
import { Link } from "react-router-dom";
import SignupBar from "./SignupBar";

function LoginBar() {
  return (
    <section id="login-bar">
      <div className="login-bar">
        <div className="login-container">
          <div className="user-id-box-text font-style" id="id">
            아이디
          </div>
          <input
            type="text"
            className="user-id-box"
            name="id"
            placeholder="아이디를 입력해주세요"
          />
          <div className="user-password-box-text font-style">비밀번호</div>
          <div className="login-bar-password-bar-wrap">
            <input
              type="password"
              className="user-password-box"
              id="passwordbox"
              name="pw"
              placeholder="비밀번호를 입력해주세요"
            />
            <button className="login-bar-password-express-btn font-style">
              확인
            </button>
          </div>
          <button type="submit" className="login-sumbit-button">
            <div className="login-sumbit-button-text font-style">로그인</div>
          </button>
          <div className="continueLogin-signUp-wrap">
            <div className="login-continue-container">
              <input
                type="checkbox"
                name="checkbox"
                className="login-continue-checkbox"
              />
              <div className="login-continue-checkbox-text font-style">
                로그인 상태 유지
              </div>
            </div>
            <Link to="/signup">
              <div className="sign-up-link font-style">회원가입</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginBar;

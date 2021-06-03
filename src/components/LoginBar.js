import React, { useEffect, useState } from "react";
import "./LoginBar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { CookiesProvider } from "react-cookie";

function LoginBar() {
  function passwordExpressBtn() {
    document.getElementById("passwordbox").type =
      document.getElementById("passwordbox").type == "password"
        ? "text"
        : "password";
  }

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  // useEffect(() => {
  //   console.log(userId);
  //   console.log(userPw);
  // }, [userId, userPw]);

  const onChangeUserId = (event) => {
    setUserId(event.target.value);
  };

  const onChangeUserPW = (event) => {
    setUserPw(event.target.value);
  };

  const onClickLogin = async () => {
    const userInfo = {
      id: userId,
      pw: userPw,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8888/auth/login",
        userInfo
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err.response);
      window.alert("비밀번호 또는 아이디가 잘못 되었습니다.");
    }
  };

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
            onChange={onChangeUserId}
          />
          <div className="user-password-box-text font-style">비밀번호</div>
          <div className="login-bar-password-bar-wrap">
            <input
              type="password"
              className="user-password-box"
              id="passwordbox"
              name="pw"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChangeUserPW}
            />
            <button
              className="login-bar-password-express-btn font-style"
              onClick={passwordExpressBtn}
            >
              확인
            </button>
          </div>
          <button
            type="submit"
            className="login-sumbit-button"
            onClick={onClickLogin}
          >
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

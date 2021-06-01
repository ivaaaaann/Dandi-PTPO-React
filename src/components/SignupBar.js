import "./SignupBar.css";

function SignupBar() {
  return (
    <section id="signup-main-bar">
      <div className="signup-main-bar">
        <div className="sign-up-container">
          <div className="sign-up-main-title font-style">회원가입</div>
          <hr className="sign-up-division-line" width="94%" color="#faa860" />
          <div className="idnickname-container">
            <div className="id-input-wrap">
              <div className="id-input-text-wrap">
                <div className="id-input-text font-style">ID</div>
                <button
                  type="submit"
                  className="nickname-double-check-btn font-style"
                >
                  중복확인
                </button>
              </div>
              <input
                type="text"
                className="id-input"
                placeholder="아이디를 입력해주세요"
                name="id"
              />
            </div>
            <div className="nickname-input-wrap">
              <div className="nickname-input-text-wrap">
                <div className="nickname-input-text font-style">닉네임</div>
                <button
                  type="submit"
                  className="nickname-double-check-btn font-style"
                >
                  중복확인
                </button>
              </div>

              <input
                type="text"
                className="nickname-input"
                placeholder="닉네임을 입력해주세요"
                name="nickname"
              />
            </div>
          </div>
          <div className="email-container">
            <div className="e-mail-input-text font-style">이메일</div>
            <input
              type="email"
              className="e-mail-input"
              name="mail"
              placeholder="ABC@ABC.COM"
            />
          </div>
          <div className="password-container">
            <div className="password-input-text font-style">비밀번호</div>
            <input
              type="password"
              className="password-input"
              name="pw"
              placeholder="8자리 이상 입력해주세요"
            />
          </div>
          <div className="checkpassword-container">
            <div className="checkpassword-input-text font-style">
              비밀번호 재확인
            </div>
            <input
              type="password"
              className="checkpassword-input"
              name="checkpw"
              placeholder="8자리 이상 입력해주세요"
            />
          </div>

          <div className="agree-wrap">
            <div className="first-agree-wrap">
              <input
                type="checkbox"
                name="agree_checkbox"
                className="consent-check1"
              />
              <div className="consent-check1-text font-style">
                위 개인정보를 저장,수집,활용 하는것에 동의합니다
              </div>
            </div>
          </div>
          <button type="submit" onclick="signupbtn()" className="sign-up-btn">
            <div className="sign-up-btn-text font-style">회원가입</div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignupBar;

import React from "react";
import "./MyProfile.css";

function MyProfileBar() {
  return (
    <div className="profile-bar">
      <div className="profile-bar-profile-image font-style">
        <div className="profile-bar-profile-image-change-img-text font-style">
          변경
        </div>
      </div>
      <div className="profile-bar-profile-explanation font-style">
        <div className="profile-bar-profile-explanation-text-container">
          포트폴리오 관리
          웹입니다.가나다라마바사아자차카타파하아야어여오요우유으이12345678910abcdefghighklmnopqrstuvwsyz
        </div>
      </div>
    </div>
  );
}

export default MyProfileBar;

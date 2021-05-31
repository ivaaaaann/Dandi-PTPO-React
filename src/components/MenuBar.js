import React from "react";
import "./MenuBar.css";

function MenuBar() {
  return (
    <div className="menubar">
      <button id="friendbar" className="menu">
        <img
          src="https://image.flaticon.com/icons/png/512/2521/2521894.png"
          alt="menu"
          title="Friend"
          className="menu-img"
        />
      </button>
      <hr className="menubar-divider" color="#faa860" />
    </div>
  );
}

export default MenuBar;

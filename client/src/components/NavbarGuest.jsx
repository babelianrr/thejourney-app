import React from "react";
import logo from "../assets/thejourney.png";

export default function NavbarGuest(props) {
  const { handleOpenLogin, handleOpenRegister } = props;
  return (
    <>
      <div className="container">
        <nav>
          <div className="container p-2 d-flex flex-row align-items-center justify-content-between">
            <img src={logo} className="navbar-brand" alt="logo" />
            <div>
              <button className="btn btn-outline-primary btn-sm mx-2" onClick={handleOpenLogin}>Log in</button>
              <button className="btn btn-primary btn-sm mx-2" onClick={handleOpenRegister}>Register</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
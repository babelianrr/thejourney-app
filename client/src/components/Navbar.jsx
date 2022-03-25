import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from "../context/userContext";

import logo from "../assets/thejourney-black.png";
import profilepic from "../assets/blank-profile.png";
import userIcon from "../assets/user-icon.png";
import writeIcon from "../assets/write-icon.png";
import bookmarkIcon from "../assets/bookmark-icon.png"
import logoutIcon from "../assets/logout-icon.png"

import { API } from "../config/api";

export default function Navbar() {
  const [state, dispatch] = useContext(UserContext);
  const [profile, setProfile] = useState({});

  let history = useHistory();

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    history.push("/auth");
  };

  const getProfile = async (id) => {
    try {
      const response = await API.get("/user/" + state.user.id);
      setProfile(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="container shadow">
        <nav>
          <div className="container p-2 d-flex flex-row align-items-center justify-content-between">
            <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
              <img src={logo} alt="logo" />
            </Link>
            <ul className="d-flex flex-row align-items-center navbar-nav">
              <li className="mx-3 nav-item dropdown">
                <div className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={profile.image ? profile.image : profilepic} alt="profile pic" className="rounded-circle" style={{ width: '50px' }} />
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="text-center">
                    <Link to={`/user/${state.user.id}`} style={{ textDecoration: "none", color: "#000000" }}>
                      <div className="dropdown-item nav-link">
                        <img src={userIcon} alt="profile" /> <span className="fw-3">Profile</span>
                      </div>
                    </Link>
                  </li>
                  <li className="text-center">
                    <Link to="/new-journal" style={{ textDecoration: "none", color: "#000000" }}>
                      <div className="dropdown-item nav-link">
                        <img src={writeIcon} alt="write" /> <span className="fw-3">Write Journey</span>
                      </div>
                    </Link>
                  </li>
                  <li className="text-center">
                    <Link to="/bookmark" style={{ textDecoration: "none", color: "#000000" }}>
                      <div className="dropdown-item nav-link">
                        <img src={bookmarkIcon} alt="bookmark" /> <span className="fw-3">Bookmarks</span>
                      </div>
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className="text-center" onClick={() => logout()} style={{ textDecoration: "none", color: "#000000" }}>
                    <div className="dropdown-item nav-link">
                      <img src={logoutIcon} alt="logout" /> <span className="fw-3">Log Out</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

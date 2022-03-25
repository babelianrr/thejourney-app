import React, { useContext, useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import dateFormat from "dateformat";
import parse from "html-react-parser";
import { useAlert } from "react-alert";

import Navbar from "../components/Navbar";
import JourneyCard from "../components/card/JourneyCard"

import { UserContext } from "../context/userContext";

import imgBlank from "../assets/blank-profile.png";
import journalempty from "../assets/journal-empty.png";
import bookmarkIcon from "../assets/bookmark-icon.png"
import bookmarkedIcon from "../assets/bookmarked-icon.png"

import { API } from "../config/api";

export default function Profile() {
  let history = useHistory();
  const alert = useAlert();
  const title = "Profile";
  document.title = "DumbMerch | " + title;

  const [state] = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [journals, setJournals] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  const getProfile = async (id) => {
    try {
      const response = await API.get("/user/" + state.user.id);
      setProfile(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getJournals = async () => {
    try {
      const response = await API.get("/journalx/" + state.user.id);
      setJournals(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookmark = async () => {
    try {
      const response = await API.get("/bookmark/" + state.user.id);
      setBookmark(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookmark = async (id) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = {
        userId: state.user.id,
        journalId: id
      }
      const body = JSON.stringify(data);
      const response = await API.post(`/bookmark/${id}`, body, config);
      if (response?.status === 201) {
        alert.success("Bookmark successfully added!");
      } else if (response?.status === 200) {
        alert.info("Bookmark successfully removed!");
      }
    } catch (error) {
      alert.danger("An Error Occurred")
      console.log(error);
    }
  }

  useEffect(() => {
    getProfile();
    getJournals();
    getBookmark();
  }, []);

  const handleUpdate = () => {
    history.push("/update-profile/" + state.user.id);
  }

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    576: 1
  };

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Row>
          <Col>
            <div className="h1 mb-4 text-red fw-9">My Profile</div>
            <Row>
              <div class="mx-auto text-center">
                <img src={profile?.image ? profile.image : imgBlank} className="img-fluid rounded-circle" alt="avatar" style={{ width: 150 }} />
                <div className="fs-4 fw-9">{profile.name}</div>
                <div className="fs-18 fw-3">{profile.email}</div>
                <div className="fs-18 fw-3">{profile.phone}</div>
                <div className="fs-18 fw-3">{profile.address}</div>
              </div>
            </Row>
            <hr className="hr-blue" />
            <Row className="my-4">
              <div className="h2 mb-4 text-red fw-9">My Journals</div>
              {journals.length !== 0 ? (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {journals.map((item, index) => (
                    <>
                      <div key={index} className="card my-3 shadow-sm overflow-hidden position-relative" style={{ width: 250, height: 300 }}>
                        <div class="position-absolute top-0 end-0">
                          <div onClick={() => handleBookmark(item.id)} className="bg-light rounded-circle m-1 p-1">
                            {bookmark.map((itemI) => (
                              <img src={itemI.journalId === item.id ? bookmarkedIcon : bookmarkIcon} alt="bookmark" />
                            ))}
                          </div>
                        </div>
                        <img src={item.image} className="img-fluid img-rounded" alt="thumbnail" />
                        <Link to={`/journal/${item.id}`} style={{ color: "#000000", textDecoration: "none" }}>
                          <div className="card-body p-2 ">
                            <div className="card-title fw-9 fs-18">{item.title}</div>
                            <div className="text-muted fs-12">{dateFormat(item.createdAt, "mmmm dd, yyyy")} | {item.user.name}</div>
                            <div className="card-text fw-3 fs-14">{parse(item.description)}</div>
                          </div>
                        </Link>
                      </div>
                    </>
                  ))}
                </Masonry>
              ) : (
                <Col>
                  <div className="text-center my-5">
                    <img src={journalempty} alt="journal-empty" class="mb-3" style={{ height: 300 }} />
                    <p className="h3">No Journals Written</p>
                  </div>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

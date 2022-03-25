import React, { useState, useEffect, useContext } from "react";
import { Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import dateFormat from "dateformat";

import { UserContext } from "../../context/userContext";
import { API } from "../../config/api";

import bookmarkedIcon from "../../assets/bookmarked-icon.png"

export default function BookmarkCard({ item, handleRemoveBookmark }) {
  const [state] = useContext(UserContext);
  const [bookmarks, setBookmarks] = useState([]);

  const getBookmarks = async () => {
    try {
      const response = await API.get("/bookmark/" + state.user.id);
      setBookmarks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <>
      <div className="card my-3 shadow-sm overflow-hidden position-relative" style={{ width: 250, height: 250 }}>
        <div class="position-absolute top-0 end-0">
          <div onClick={() => handleRemoveBookmark(item.id)} className="bg-light rounded-circle m-1 p-1"><img src={bookmarkedIcon} alt="bookmark" /></div>
        </div>
        <img src={item.journal.image} className="img-fluid img-rounded" alt="thumbnail" />
        <Link to={`/journal/${item.id}`} style={{ color: "#000000", textDecoration: "none" }}>
          <div className="card-body p-2 ">
            <div className="card-title fw-9 fs-18">{item.journal.title}</div>
            <div className="text-muted fs-12">{dateFormat(item.createdAt, "mmmm dd, yyyy")} | {item.user.name}</div>
            <div className="card-text fw-3 fs-14">{parse(item.journal.description)}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

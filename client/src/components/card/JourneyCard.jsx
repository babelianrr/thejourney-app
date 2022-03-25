import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import dateFormat from "dateformat";

import { UserContext } from "../../context/userContext";
import { API } from "../../config/api";

import bookmarkIcon from "../../assets/bookmark-icon.png"
import bookmarkedIcon from "../../assets/bookmarked-icon.png"

export default function JourneyCard({ item, handleBookmark, bookmark }) {
  const [state] = useContext(UserContext);

  return (
    <>
      <div className="card my-3 shadow-sm overflow-hidden position-relative" style={{ width: 250, height: 300 }}>
        <div class="position-absolute top-0 end-0">
          <div onClick={() => handleBookmark(item.id)} className="bg-light rounded-circle m-1 p-1"><img src={bookmark.userId === state.user.id ? bookmarkedIcon : bookmarkIcon} alt="bookmark" /></div>
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
  );
}

import React from "react";
import parse from "html-react-parser";
import dateFormat from "dateformat";

export default function JourneyCardGuest({ item }) {
  return (
    <div className="card my-3 shadow-sm overflow-hidden" style={{ width: 250, height: 300 }}>
      <img src={item.image} className="img-fluid img-rounded" alt="dewata" />
      <div className="card-body p-2 row">
        <div className="card-title fw-9 fs-18 d-inline text-truncate">{item.title}</div>
        <div className="text-muted fs-12">{dateFormat(item.createdAt, "mmmm dS, yyyy")} | {item.user.name}</div>
        <div className="card-text fw-3 fs-14">{parse(item.description)}</div>
      </div>
    </div>
  );
}

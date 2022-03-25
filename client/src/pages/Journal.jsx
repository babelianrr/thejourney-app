import { useState, useEffect, useContext } from "react";
import { useAlert } from "react-alert";
import { Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import dateFormat from "dateformat";
import parse from "html-react-parser";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";

import Navbar from "../components/Navbar";

import journalempty from "../assets/journal-empty.png";
import bookmarkIcon from "../assets/bookmark-icon.png"
import bookmarkedIcon from "../assets/bookmarked-icon.png"

export default function Journal() {
  const alert = useAlert();
  const title = "Home";
  document.title = "Journey Diary | " + title;

  const [state] = useContext(UserContext);
  const [journals, setJournals] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const getJournals = async () => {
    try {
      const response = await API.get("/journals");
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
        getBookmark();
      } else if (response?.status === 200) {
        alert.info("Bookmark successfully removed!");
        getBookmark();
      }
    } catch (error) {
      alert.danger("An Error Occurred")
      console.log(error);
    }
  }

  useEffect(() => {
    getJournals();
    getBookmark();
  }, []);

  const dataPerPage = 8;
  const numberOfRecordsVisited = page * dataPerPage;
  const totalPages = Math.ceil(journals.length / dataPerPage);

  const changePage = ({ selected }) => { setPage(selected); };

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    576: 1
  };

  return (
    <div>
      <div className="container bg-gray">
        <Navbar />
        <Row className="mt-5">
          <Col>
            <h2 className="fw-9 text-red">Journals</h2>
            <div class="input-group my-3 d-flex justify-content-center">
              <div style={{ width: "75vw" }}>
                <input type="text" class="form-control" placeholder="Search Journals" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => { setSearch(e.target.value) }} />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-4 mx-auto">
          {journals.length !== 0 ? (
            <>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {journals.filter((item) => {
                  if (search === "") {
                    return item
                  } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                    return item
                  }
                })
                  .slice(numberOfRecordsVisited, numberOfRecordsVisited + dataPerPage)
                  .map((item, index) => (
                    <>
                      <div key={index} className="card my-3 shadow-sm overflow-hidden position-relative" style={{ width: 250, height: 300 }}>
                        <div class="position-absolute top-0 end-0">
                          <div onClick={() => handleBookmark(item.id)} className="bg-light rounded-circle m-1 p-1">
                            {bookmark.length !== 0 ? (
                              bookmark.map((itemI) => (
                                <img src={itemI.journalId === item.id && itemI.userId === state.user.id ? bookmarkedIcon : bookmarkIcon} alt="bookmark" />
                              ))) : (
                              <img src={bookmarkIcon} alt="bookmark" />
                            )}
                          </div>
                        </div>
                        <img src={item.image} className="img-fluid img-rounded" alt="thumbnail" />
                        <Link to={`/journal/${item.id}`} style={{ color: "#000000", textDecoration: "none" }}>
                          <div className="card-body p-2 row">
                            <div className="card-title fw-9 fs-18 d-inline text-truncate">{item.title}</div>
                            <div className="text-muted fs-12">{dateFormat(item.createdAt, "mmmm dd, yyyy")} | {item.user.name}</div>
                            <div className="card-text fw-3 fs-14">{parse(item.description)}</div>
                          </div>
                        </Link>
                      </div>
                    </>
                  ))}
              </Masonry>
              {journals.length > dataPerPage ? (
                <ReactPaginate previousLabel={"«"} nextLabel={"»"} pageCount={totalPages} onPageChange={changePage} containerClassName={"pagination"} pageClassName={"page-item"} pageLinkClassName={"page-link"} previousLinkClassName={"page-link"} nextLinkClassName={"page-link"} disabledClassName={"disabled"} activeClassName={"active"} />
              ) : (
                <div></div>
              )}
            </>
          ) : (
            <Col>
              <div className="text-center my-5">
                <img src={journalempty} alt="journal-empty" class="mb-3" style={{ height: 300 }} />
                <p className="h3">No Journals Written</p>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}

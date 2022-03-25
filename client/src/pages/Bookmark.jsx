import { useState, useEffect, useContext } from "react";
import { useAlert } from "react-alert";
import { Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import ReactPaginate from "react-paginate";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";

import BookmarkCard from "../components/card/BookmarkCard";
import Navbar from "../components/Navbar";
import journalempty from "../assets/journal-empty.png";

export default function Bookmark() {
  const alert = useAlert();
  const title = "Bookmarks";
  document.title = "Journey Diary | " + title;

  const [state] = useContext(UserContext);
  const [bookmarks, setBookmarks] = useState([]);
  const [page, setPage] = useState(0);

  const getBookmarks = async () => {
    try {
      const response = await API.get("/bookmark/" + state.user.id);
      setBookmarks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemoveBookmark = async (id) => {
    try {
      await API.delete(`/bookmark/${id}`);
      alert.info("Bookmark successfully removed");
      getBookmarks();
    } catch (error) {
      alert.danger("An Error Occurred")
      console.log(error);
    }
  }

  useEffect(() => {
    getBookmarks();
  }, []);

  const dataPerPage = 8;
  const numberOfRecordsVisited = page * dataPerPage;
  const totalPages = Math.ceil(bookmarks.length / dataPerPage);

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
            <h2 className="fw-9 text-red">Bookmarks</h2>
          </Col>
        </Row>
        <Row className="my-4 mx-auto">
          {bookmarks.length !== 0 ? (
            <>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {bookmarks?.slice(numberOfRecordsVisited, numberOfRecordsVisited + dataPerPage)
                  .map((item, index) => (
                    <BookmarkCard key={index} item={item} handleRemoveBookmark={handleRemoveBookmark} />
                  ))}
              </Masonry>
              {bookmarks.length > dataPerPage ? (
                <ReactPaginate previousLabel={"«"} nextLabel={"»"} pageCount={totalPages} onPageChange={changePage} containerClassName={"pagination"} pageClassName={"page-item"} pageLinkClassName={"page-link"} previousLinkClassName={"page-link"} nextLinkClassName={"page-link"} disabledClassName={"disabled"} activeClassName={"active"} />
              ) : (
                <div></div>
              )}
            </>
          ) : (
            <Col>
              <div className="text-center my-5">
                <img src={journalempty} alt="journal-empty" class="mb-3" style={{ height: 300 }} />
                <p className="h3">No Bookmarks Saved</p>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}

import { useContext, useState, useEffect } from "react";
import { Modal, Col } from 'react-bootstrap';
import Masonry from "react-masonry-css";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";

import { UserContext } from "../context/userContext";
import { API } from "../config/api";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import NavbarGuest from "../components/NavbarGuest";
import Jumbotron from "../components/Jumbotron";
import JourneyCardGuest from "../components/card/JourneyCardGuest"
import journalempty from "../assets/journal-empty.png";

export default function Auth() {
  let history = useHistory();

  const title = "Home";
  document.title = "Journey Diary | " + title;

  const [state] = useContext(UserContext);

  const checkAuth = () => {
    if (state.isLogin === true) {
      history.push("/");
    }
  };
  checkAuth();

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const handleOpenLogin = () => setShowLogin(true)
  const handleCloseLogin = () => setShowLogin(false)
  const handleOpenRegister = () => setShowRegister(true)
  const handleCloseRegister = () => setShowRegister(false)

  const [journals, setJournals] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const getJournals = async () => {
    try {
      const response = await API.get("/journals");
      setJournals(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJournals();
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
        <div className="jumbotron">
          <NavbarGuest
            handleOpenLogin={handleOpenLogin}
            handleOpenRegister={handleOpenRegister}
          />
          <Jumbotron />
        </div>
        <div className="row my-5">
          <div className="h2 fw-9">Journals</div>
          <div class="input-group my-3 d-flex justify-content-center">
            <div style={{ width: "75vw" }}>
              <input type="text" class="form-control" placeholder="Search Journals" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => { setSearch(e.target.value) }} />
            </div>
          </div>
          <div className="row my-4 mx-auto">
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
                      <JourneyCardGuest key={index} item={item} />
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
          </div>
        </div>
      </div>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton></Modal.Header>
        <Login />
      </Modal>
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton></Modal.Header>
        <Register />
      </Modal>
    </div>
  );
}

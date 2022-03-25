import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import dateFormat from "dateformat";
import parse from "html-react-parser"
import { UserContext } from "../context/userContext";

import Navbar from "../components/Navbar";
import dewata from "../assets/dewata-large.png";

import { API } from "../config/api";

export default function JournalDetail() {
  let history = useHistory();
  let { id } = useParams();

  const title = "Product Detail";
  document.title = "Journey Diary | " + title;

  const [state] = useContext(UserContext);
  const [journal, setJournal] = useState({
    id: null,
    title: "",
    image: "",
    description: "",
    createdAt: "",
    user: {
      name: "",
      email: "",
      address: ""
    }
  });

  const getJournal = async () => {
    try {
      const response = await API.get("/journal/" + id);
      setJournal(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJournal();
  }, []);


  return (
    <div>
      <Navbar />
      <Container className="p-4">
        <Row clasName="my-5">
          <div className="col-9">
            <div className="fs-2 fw-9 text-red">{journal.title}</div>
            <div className="fs-18 text-primary">{dateFormat(journal.createdAt, "mmmm dS, yyyy")}</div>
          </div>
          <div className="col-3">
            <div className="fs-21 text-end">{journal.user.name}</div>
          </div>
        </Row>
        <Row className="my-5">
          <Col>
            <img src={journal.image} className="img-fluid img-rounded w-100" alt="thumbnail" />
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="fs-16" style={{ textAlign: "justify" }}>
            {parse(journal.description)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
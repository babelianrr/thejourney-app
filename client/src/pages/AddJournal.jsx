import { useState, useEffect, useContext } from "react";
import { Row, Col, Alert, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UserContext } from "../context/userContext";
import { API } from "../config/api";

import Navbar from "../components/Navbar";

export default function AddJournal() {
  const title = "New Journal";
  document.title = "Journey Diary | " + title;

  let history = useHistory();

  const [state] = useContext(UserContext);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    userId: state.user.id,
    image: "",
    description: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleChangeEditor = (event, editor) => {
    const data = editor.getData();
    setForm({
      ...form,
      description: data
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("userId", form.userId);
      formData.set("title", form.title);
      formData.set("image", form.image[0], form.image[0].name);
      formData.set("description", form.description);

      await API.post("/journal", formData, config);

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container bg-gray">
        <Navbar />
        <Row className="mt-5">
          <Col>
            <h2 className="fw-9 text-red">New Journal</h2>
          </Col>
        </Row>
        <Row className="my-4 mx-auto">
          <Col>
            <form onSubmit={handleSubmit}>
              <input type="hidden" class="form-control" name="userId" id="userId" value={state.user.id} onChange={handleChange} />
              <div className="mb-3">
                <label htmlFor="title" name="title" class="form-label fw-5">Title</label>
                <input type="text" class="form-control" name="title" id="title" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="image" name="image" class="form-label fw-5">Cover Image</label>
                <input type="file" id="upload" name="image" onChange={handleChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="preview" name="preview" class="form-label fw-5">Preview</label>
                <div style={{ width: "80vh" }}>
                  {preview && (
                    <div>
                      <img src={preview} alt="preview" className="img-fluid" />
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" name="description" class="form-label fw-5">Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                  }}
                  onChange={handleChangeEditor}
                  onBlur={(event, editor) => {
                  }}
                  onFocus={(event, editor) => {
                  }}
                />
              </div>
              <div className="d-grid gap-2 mt-4">
                <Button type="submit" className="form-control btn btn-success" size="md">
                  Post
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

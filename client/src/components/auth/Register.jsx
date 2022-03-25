import React, { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAlert } from "react-alert";
import { API } from "../../config/api";

import mappin from "../../assets/map-pin.png";
import leaf from "../../assets/leaf.png";

export default function Register() {
  const alert = useAlert();

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const { name, email, password, phone, address } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    try {

      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);

      if (response.data.status === "Success") {
        setForm({
          name: "",
          email: "",
          password: "",
          phone: "",
          address: "",
        });

      } else {

        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );

        setMessage(alert);
      }

    } catch (error) {
      alert.error("An Error Occurred");
      console.log(error);
    }

  };

  return (
    <div>
      <div className="container position-relative">
        <div className="row mb-5">
          <div className="col">
            <div className="position-absolute top-0 start-0" ><img src={mappin} alt="pin" style={{ height: "100px" }} /></div>
            <div className="position-absolute top-0 end-0" ><img src={leaf} alt="leaf" style={{ height: "120px" }} /></div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h1 className="mb-4 fw-9">Register</h1>
            {message && message}
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3 form-blue">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3 form-blue">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3 form-blue">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3 form-blue">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3 form-blue">
                <textarea
                  className="form-control"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={address}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <button className="form-control btn btn-blue">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

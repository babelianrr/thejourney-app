import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

import { API } from "../../config/api";

import mappin from "../../assets/map-pin.png";
import leaf from "../../assets/leaf.png";

export default function Login() {
  let history = useHistory();
  const alert = useAlert();

  const title = "Login";
  document.title = "The Journey | " + title;

  const [state, dispatch] = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

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

      const response = await API.post("/login", body, config);

      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        if (response.data.data) {
          history.push("/");
        }
      }
    } catch (error) {
      alert.error("Credentials does not match");
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
            <h1 className="mb-4 fw-9">Login</h1>
            <form onSubmit={handleSubmit}>
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
              <div className="form-group mb-3">
                <button className="form-control btn btn-blue">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

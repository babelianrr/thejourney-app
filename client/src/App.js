import React, { useContext, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { UserContext } from "./context/userContext";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './index.css';

import Auth from "./pages/Auth";
import Journal from "./pages/Journal";
import JournalDetail from "./pages/JournalDetail";
import Profile from "./pages/Profile";
import Bookmark from "./pages/Bookmark";
import AddJournal from "./pages/AddJournal";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (!state.isLogin) {
      history.push("/auth");
    } else {
      history.push("/");

    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;

      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Journal} />
      <Route path="/auth" component={Auth} />
      <Route path="/user/:id" component={Profile} />
      <Route path="/journal/:id" component={JournalDetail} />
      <Route path="/bookmark" component={Bookmark} />
      <Route path="/new-journal" component={AddJournal} />
    </Switch>
  );
}

export default App;

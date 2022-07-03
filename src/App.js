import React, { useContext, useEffect } from "react";
import * as Configs from "./configs/index";
import { Routes, Route, useNavigate } from "react-router-dom";

if (localStorage.token) {
  Configs.setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(Configs.UserContext);

  useEffect(() => {
    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.role === "admin") {
        navigate("/admin-dashboard");
      } else if (state.user.role === "guru") {
        navigate("/guru-dashboard");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await Configs.API.get("/check-auth");

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
    <Routes>
      <Route exact path="/*" element={<Configs.RoutesHome />} />
      <Route exact path="admin-dashboard/*" element={<Configs.RoutesAdmin />} />
      <Route exact path="guru-dashboard/*" element={<Configs.RoutesUser />} />
    </Routes>
  );
}

export default App;

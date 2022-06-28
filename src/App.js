import * as Configs from "./configs/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<Configs.RoutesHome />} />
      <Route exact path="admin-dashboard/*" element={<Configs.RoutesAdmin />} />
      <Route exact path="user-dashboard/*" element={<Configs.RoutesUser />} />
    </Routes>
  );
}

export default App;

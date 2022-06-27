import * as Configs from "./configs/index";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<Configs.RoutesHome />} />
      <Route exact path="dashboard/*" element={<Configs.RoutesDashboard />} />
    </Routes>
  );
}

export default App;

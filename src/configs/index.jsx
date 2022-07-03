import RoutesHome from "./Routes";
import RoutesAdmin from "./RoutesAdmin";
import RoutesUser from "./RoutesUser";
import PrivateRoute from "./privateRoute";
import { UserContext, UserContextProvider } from "./userContext";
import { API, setAuthToken } from "./api";

export {
  RoutesHome,
  RoutesAdmin,
  RoutesUser,
  PrivateRoute,
  UserContext,
  UserContextProvider,
  API,
  setAuthToken,
};

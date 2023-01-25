import { createBrowserRouter } from "react-router-dom";
import Armories from "./components/Armories";
import Root from "./Root";
import Events from "./screens/Events";
import Home from "./screens/Home";
import Search from "./screens/Search";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "character/:charId",
        element: <Armories />,
      },
    ],
  },
]);

export default router;

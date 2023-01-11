import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Characters from "./screens/Characters";
import Events from "./screens/Events";
import Home from "./screens/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "events",
            element: <Events />,
          },
          {
            path: "characters/:charId",
            element: <Characters />,
          },
        ],
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import About from "./screens/About";
import Profile from "./screens/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "user/:username",
        element: <Profile />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

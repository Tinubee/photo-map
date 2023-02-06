import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import About from "./screens/About";
import Profile from "./screens/Profile";
import KakaoAuth from "./components/auth/social-login/KakaoAuth";
import MyKoreaMap from "./screens/MyKoreaMap";
import MyWorldMap from "./screens/MyWorldMap";

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
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "mykoreamap",
            element: <MyKoreaMap />,
          },
          {
            path: "myworldmap",
            element: <MyWorldMap />,
          },
        ],
      },
      {
        path: "users/kakao/finish",
        element: <KakaoAuth />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

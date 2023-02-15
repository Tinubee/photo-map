import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Root from "./Root";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import KakaoAuth from "./components/auth/social-login/KakaoAuth";
import MyKoreaMap from "./screens/MyKoreaMap";
import MyWorldMap from "./screens/MyWorldMap";
import EditProfile from "./screens/EditProfile";
import UserKoreaMap from "./screens/UserKoreaMap";
import Community from "./screens/Community";
import Like from "./screens/Like";
import UserWorldMap from "./screens/UserWorldMap";

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
        path: "community",
        element: <Community />,
      },
      {
        path: "like",
        element: <Like />,
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
        ],
      },
      {
        path: "user/:userId",
        children: [
          {
            path: "edit",
            element: <EditProfile />,
          },
          {
            path: "mykoreamap",
            element: <MyKoreaMap />,
          },
          {
            path: "myworldmap",
            element: <MyWorldMap />,
          },
          {
            path: "koreamap",
            element: <UserKoreaMap />,
          },
          {
            path: "worldmap",
            element: <UserWorldMap />,
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

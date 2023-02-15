import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/header/Home";
import Root from "./Root";
import Login from "./screens/header/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import KakaoAuth from "./components/auth/social-login/KakaoAuth";
import MyKoreaMap from "./screens/map/MyKoreaMap";
import MyWorldMap from "./screens/map/MyWorldMap";
import EditProfile from "./screens/EditProfile";
import UserKoreaMap from "./screens/map/UserKoreaMap";
import Community from "./screens/header/Community";
import Like from "./screens/header/Like";
import UserWorldMap from "./screens/map/UserWorldMap";
import Recommend from "./screens/header/Recommend";

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
        path: "recommend",
        element: <Recommend />,
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

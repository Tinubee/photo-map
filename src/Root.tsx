import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { showMenuAtom } from "./atoms";
import Header from "./components/header/Header";

function Root() {
  const [showMenu, setShowMenu] = useRecoilState(showMenuAtom);

  const closeMenu = () => {
    if (showMenu) setShowMenu(false);
  };

  return (
    <div onClick={closeMenu}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;

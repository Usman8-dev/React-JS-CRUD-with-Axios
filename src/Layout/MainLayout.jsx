import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;

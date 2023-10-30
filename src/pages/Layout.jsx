import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header style={{ backgroundColor: "lightgrey", padding: 16 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;

import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const centeredPage = ["/signup", "/signin"];
  let itemsCenterGrant = "";
  if (centeredPage.includes(location.pathname)) {
    itemsCenterGrant = "items-center";
  }

  return (
    <>
      <div
        className={`flex min-h-screen bg-primary justify-center ${itemsCenterGrant}`}
      >
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;

import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gray-100">
      {location.pathname === "/" || location.pathname === "/ourservices" ? (
        <Header />
      ) : null}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;

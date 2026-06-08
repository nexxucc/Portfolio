import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useReveal } from "../hooks/useReveal";
import { useCardTilt } from "../hooks/useCardTilt";

export function Layout() {
  const location = useLocation();

  useReveal(location.pathname);
  useCardTilt(location.pathname);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Locations from "./pages/Locations";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[9.5px] tracking-[0.52em] uppercase mb-4 text-[#D4AF37]">404</p>
      <h1 className="font-['Playfair_Display',serif] text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-white/40 mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="px-8 py-3.5 bg-[#D4AF37] text-black text-[9.5px] tracking-[0.28em] uppercase font-semibold">Return Home</a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "locations", Component: Locations },
      { path: "menu", Component: Menu },
      { path: "gallery", Component: Gallery },
      { path: "events", Component: Events },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "terms", Component: TermsOfService },
      { path: "*", Component: NotFound },
    ],
  },
]);

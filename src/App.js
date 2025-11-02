import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Research from "./components/Research";
import People from "./components/People";
import Publications from "./components/Publications";
import News from "./components/News";
import Contact from "./components/Contact";
import Login from "./components/Login";
import labLogo from "./images/Lee_lab_banner_TWL.png";

function Layout() {
  const location = useLocation();

  // Navigation items for the footer
  const navItems = [
    { path: "/research", label: "RESEARCH" },
    { path: "/people", label: "PEOPLE" },
    { path: "/publications", label: "PUBLICATIONS" },
    { path: "/news", label: "LAB NEWS" },
    { path: "/contact", label: "CONTACT" },
    { path: "/login", label: "LOGIN" },
  ];

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* PAGE CONTENT */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<Research />} />
          <Route path="/people" element={<People />} />
          <Route path="/current-members" element={<People />} />
          <Route path="/alumni" element={<People />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* FOOTER visible on home and main site pages (supports nested/trailing paths) */}
      {(() => {
        const p = location.pathname;
        const bases = [
          "/",
          "/research",
          "/people",
          "/publications",
          "/news",
          "/contact",
          "/login",
        ];
        const match = bases.some((base) => p === base || p.startsWith(base + "/"));
        return match;
      })() && (
        <footer
          className="py-3 mt-auto text-light"
          style={{ backgroundColor: "#1d3557" }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center px-4">
            {/* Left Side: Logo (links to homepage) */}
            <Link className="navbar-brand d-flex align-items-center p-0" to="/">
              <img
                src={labLogo}
                alt="Lee Lab Banner"
                style={{ height: "45px" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x45/1d3557/fff?text=LEE+LAB";
                }}
              />
            </Link>

            {/* Right Side: Navigation Links */}
            <ul className="nav gap-3">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    className="nav-link fw-light text-uppercase text-white p-0"
                    to={item.path}
                    style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
      {/* Load Bootstrap JS for the carousel functionality */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      ></script>
    </Router>
  );
}

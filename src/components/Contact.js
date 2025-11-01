import React, { useState, useEffect, useRef } from "react";
import logo from "../images/Lee_lab_banner_TWL.png";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (!navRef.current) return;
    const setOffset = () => {
      document.body.style.paddingTop = `${navRef.current.offsetHeight}px`;
    };
    setOffset();
    window.addEventListener("resize", setOffset);
    return () => window.removeEventListener("resize", setOffset);
  }, []);

  return (
    <div style={{ backgroundColor: "#E9E3DF", minHeight: "100vh" }}>
      {/* Navbar (minimal) */}
      <nav
        ref={navRef}
        className="navbar navbar-expand-lg fixed-top navbar-dark py-2"
        style={{ backgroundColor: "#FF7A30" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="Lee Lab"
              style={{ height: 44, width: "auto", display: "block" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto" style={{ gap: "1rem" }}>
              {[
                { label: "RESEARCH", href: "/research" },
                { label: "PEOPLE", href: "/people" },
                { label: "PUBLICATIONS", href: "/publications" },
                { label: "LAB NEWS", href: "/news" },
                { label: "CONTACT", href: "/contact" },
                { label: "LOGIN", href: "/login" },
              ].map((item) => (
                <li className="nav-item" key={item.label}>
                  <a className="nav-link nav-min text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="container" id="contact">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            <div className="row g-5 align-items-start py-5">
              {/* Left: copy + map */}
              <div className="col-12 col-lg-6">
                <h1 className="display-6 fw-bold text-navy mb-3">
                  Send Us A Message
                </h1>

                <div className="card border-0 shadow-xs rounded-4 overflow-hidden">
                  <div className="ratio ratio-4x3">
                    <iframe
                      title="Lee Lab Location Map"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-71.325%2C42.619%2C-71.279%2C42.651&layer=mapnik&marker=42.636%2C-71.302"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="col-12 col-lg-6">
                <div className="card border-0 shadow-xs rounded-4">
                  <div className="card-body p-4 p-md-5">
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-3">
                        <label className="form-label label-min text-navy">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control clean"
                          placeholder="Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label label-min text-navy">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control clean"
                          placeholder="Email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label label-min text-navy">
                          Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control clean"
                          placeholder="Message"
                          rows={4}
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 btn-navy"
                      >
                        Send
                      </button>

                      {submitted && (
                        <div
                          className="alert alert-soft mt-3 mb-0"
                          role="alert"
                        >
                          Thanks! Your message has been recorded (demo).
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal theme tweaks */}
      <style>{`
        :root {
          --navy: #143D6D;         /* deep blue for text/buttons */
          --accent-blue: #1CC0F0;  /* your bright blue accent */
          --card-bg: #ffffff;
          --muted: #6b7280;
        }
        .text-navy { color: var(--navy) !important; }
        .text-col { color: #FF7601; }
        .eyebrow {
          letter-spacing: .12em;
          font-size: .78rem;
          color: var(--navy);
          text-transform: uppercase;
          opacity: .9;
        }
        .nav-min { letter-spacing: .06em; font-weight: 600; }
        .nav-min:hover { text-decoration: underline; }

        .card { background: var(--card-bg); }
        .shadow-xs { box-shadow: 0 4px 18px rgba(0,0,0,.06); }

        /* Inputs — clean, minimalist */
        .form-control.clean {
          border-radius: .6rem;
          border: 1px solid #e5e7eb;
          padding: .8rem 1rem;
          background: #fff;
        }
        .form-control.clean:focus {
          border-color: var(--navy);
          box-shadow: 0 0 0 .2rem rgba(20,61,109,.12);
        }
        .label-min { font-weight: 600; font-size: .95rem; }

        /* Button */
        .btn-navy {
          background: var(--navy);
          border: none;
          border-radius: .8rem;
          padding: .9rem 1.1rem;
        }
        .btn-navy:hover { filter: brightness(.98); }
        .btn-navy:active { transform: translateY(1px); }

        /* Soft alert */
        .alert-soft {
          background: #E6F0FF;
          color: var(--navy);
          border: 1px solid #CFE0FF;
          border-radius: .6rem;
        }

        /* Make map corners visible even with tiles */
        .ratio > iframe { border-radius: .8rem; }

        /* Reduce container width for a calmer layout on very large screens */
        @media (min-width: 1400px) {
          .container { max-width: 1200px; }
        }
      `}</style>
    </div>
  );
}

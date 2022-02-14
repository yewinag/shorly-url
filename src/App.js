import React, { useState } from 'react';
import './styles/main.scss';
// import './App.scss';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './containers/Home';
// import Listing from './containers/Listing';
// import { Header } from './components/layouts';
import logo from './assets/icons/logo.svg';
import working from './assets/icons/illustration-working.svg';
import formImage from './assets/icons/bg-shorten-desktop.svg';
import brandIcon from './assets/icons/icon-brand-recognition.svg';
import customizeIcon from './assets/icons/icon-fully-customizable.svg';
import recordIcon from './assets/icons/icon-detailed-records.svg';
import boostLayoutImage from './assets/icons/bg-boost-desktop.svg';
import fb from './assets/icons/icon-facebook.svg';
import twitter from './assets/icons/icon-twitter.svg';
import prinest from './assets/icons/icon-pinterest.svg';
import instagram from './assets/icons/icon-instagram.svg';
import menu from './assets/icons/menu.svg';

function App() {
  const [isMenu, setMenu] = useState(false);
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listing />} />
        </Routes>
      </Router> */}
      <header className="header">
        <header>
          <a href="/" alt="shortly logo icon">
            <img src={logo} alt="shortly logo icon" />
          </a>
        </header>
        <nav className={`nav ${isMenu ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </ul>
          <div>
            <button className="btn login" type="button">
              <a href="#login" alt="login link">
                Login
              </a>
            </button>
            <button className="btn primary signup" type="button">
              <a href="#signup" alt="signup link">
                SignUp
              </a>
            </button>
          </div>
        </nav>
        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenu(!isMenu)}
        >
          <img src={menu} alt="menu icon" />
        </button>
      </header>
      <article className="article">
        <header className="article-header">
          <section>
            <h1>More than just shorter links</h1>
            <h2>
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing
            </h2>
            <button className="btn primary" type="button">
              <a href="#getstart" alt="get start">
                Get Started
              </a>
            </button>
          </section>
          <section>
            <img src={working} alt="illustration working" />
          </section>
        </header>
      </article>
      <article className="article-row">
        <section className="article-search-form">
          <form
            style={{
              backgroundImage: `url(${formImage})`,
            }}
          >
            <input placeholder="shorten a link here..." />
            <button type="submit" className="btn primary">
              Shorten it!
            </button>
          </form>
          <section className="result-section">
            <div className="card">
              <a href="https://www.frontendmentor.io">
                https://www.frontendmentor.io
              </a>
              <div className="card-body">
                <p className="res-text" href="https://relink/k4lKyk">
                  https://relink/k4lKyk
                </p>
                <button type="button" className="btn primary">
                  <a href="https://relink/k4lKyk">Copy</a>
                </button>
              </div>
            </div>
            <div className="card">
              <a href="https://www.frontendmentor.io">
                https://www.frontendmentor.io
              </a>
              <div className="card-body">
                <p className="res-text" href="https://relink/k4lKyk">
                  https://relink/k4lKyk
                </p>
                <button type="button" className="btn primary">
                  <a href="https://relink/k4lKyk">Copy</a>
                </button>
              </div>
            </div>
            <div className="card">
              <a href="https://www.frontendmentor.io">
                https://www.frontendmentor.io
              </a>
              <div className="card-body">
                <p className="res-text" href="https://relink/k4lKyk">
                  https://relink/k4lKyk
                </p>
                <button type="button" className="btn primary">
                  <a href="https://relink/k4lKyk">Copy</a>
                </button>
              </div>
            </div>
          </section>
        </section>
      </article>
      <article className="article-row">
        <section className="static app-container">
          <header>
            <h4>Advanced Statistics</h4>
            <p>
              Track how your links are performing accross the web with our
              advanced statics dashboard.
            </p>
          </header>

          <section className="service">
            <div className="service-card">
              <picture>
                <img src={brandIcon} alt="brand recognition" />
              </picture>
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing Branded links help instil confidence in
                your content
              </p>
            </div>
            <div className="service-card">
              <picture>
                <img src={recordIcon} alt="advanced" />
              </picture>
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing Branded links help instil confidence in
                your content
              </p>
            </div>
            <div className="service-card">
              <picture>
                <img src={customizeIcon} alt="advanced" />
              </picture>
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing Branded links help instil confidence in
                your content
              </p>
            </div>
          </section>
        </section>
      </article>
      <article
        className="boost-article"
        style={{ backgroundImage: `url(${boostLayoutImage})` }}
      >
        <section className="boost app-container">
          <h4>Boost your links today</h4>
          <button type="button" className="btn primary">
            <a href="#getstart">Get Started</a>
          </button>
        </section>
      </article>
      <footer className="footer">
        <article className="footer-section">
          <section className="footer-logo">
            <h3>Shortly</h3>
          </section>
          <section className="footer-link-layout">
            <div className="feature">
              <h5>Features</h5>
              <ul>
                <li>
                  <a href="#link">Link shortening</a>
                </li>
                <li>
                  <a href="#link">Branded Links</a>
                </li>
                <li>
                  <a href="#link">Analytic</a>
                </li>
              </ul>
            </div>
            <div className="resource">
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href="#link">Blog</a>
                </li>
                <li>
                  <a href="#link">Developers</a>
                </li>
                <li>
                  <a href="#link">Support</a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#link">About</a>
                </li>
                <li>
                  <a href="#link">Our Team</a>
                </li>
                <li>
                  <a href="#link">Careers</a>
                </li>
                <li>
                  <a href="#link">Contact</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer-social">
            <a href="#social">
              <div className="icon" style={{ backgroundImage: `url(${fb})` }} />
            </a>
            <a href="#social">
              <div
                className="icon"
                style={{ backgroundImage: `url(${twitter})` }}
              />
            </a>
            <a href="#social">
              <div
                className="icon"
                style={{ backgroundImage: `url(${prinest})` }}
              />
            </a>
            <a href="#social">
              <div
                className="icon"
                style={{ backgroundImage: `url(${instagram})` }}
              />
            </a>
          </section>
        </article>
      </footer>
    </div>
  );
}

export default App;

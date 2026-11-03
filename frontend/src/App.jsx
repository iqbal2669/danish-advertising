import './App.css'
import danishLogo from './assets/Danish logo.png'
import TodoList from './TodoList.jsx'
function App() {
  return (
    <div className="website">

      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
  <img src={danishLogo} alt="Danish Advertising Logo" />
</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-btn" href="#contact">Get Quote</a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">CREATIVE DESIGN & PRINTING SOLUTIONS</p>

          <h1>
            We Bring Your
            <span> Ideas To Life.</span>
          </h1>

          <p className="hero-text">
            Professional graphic design, digital printing,
            packaging and product solutions for your business.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-btn">
              Explore Services
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-icon">✦</div>
          <h2>DESIGN</h2>
          <h2>PRINT</h2>
          <h2>CREATE</h2>
          <p>Your Vision, Our Creativity.</p>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <p className="section-tag">WHO WE ARE</p>
        <h2>About Danish Advertising</h2>
        <p>
          Danish Advertising provides creative graphic design,
          professional printing, packaging and product development
          solutions. We help businesses turn their ideas into reality.
        </p>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <p className="section-tag">WHAT WE DO</p>
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <span>🎨</span>
            <h3>Graphic Design</h3>
            <p>Creative artwork, branding, logos and advertising designs.</p>
          </div>

          <div className="service-card">
            <span>🖨️</span>
            <h3>Digital Printing</h3>
            <p>Digital, offset, sticker and commercial printing solutions.</p>
          </div>

          <div className="service-card">
            <span>📦</span>
            <h3>Packaging Design</h3>
            <p>Professional packaging and customised print products.</p>
          </div>

          <div className="service-card">
            <span>🎒</span>
            <h3>School Bags</h3>
            <p>School bag design and customised product solutions.</p>
          </div>

          <div className="service-card">
            <span>🌧️</span>
            <h3>Raincoats</h3>
            <p>Raincoat design and product development.</p>
          </div>

          <div className="service-card">
            <span>🌍</span>
            <h3>Export Solutions</h3>
            <p>Product supply and export solutions for international clients.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products" id="products">
        <p className="section-tag">OUR WORK</p>
        <h2>Products & Solutions</h2>
        <p>
          Creative designs, printing products, school bags,
          raincoats and customised packaging.
        </p>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <p className="section-tag">LET'S WORK TOGETHER</p>
        <h2>Have a Project in Mind?</h2>
        <p>Contact Danish Advertising for your next project.</p>
        <a
          className="primary-btn"
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
      </section>
<TodoList />
      {/* Footer */}
      <footer>
        <h3>DANISH ADVERTISING</h3>
        <p>Creative Design • Professional Printing • Packaging</p>
        <p>© 2026 Danish Advertising. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App

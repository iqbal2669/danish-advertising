import './App.css'
import danishLogo from "./assets/Danish_logo.png";
import iqbalFace from "./assets/Iqbal Face.png";
import TodoList from './TodoList.jsx';
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
        <div className="founder-profile">
  <img src={iqbalFace} alt="Iqbal Salam" />
  <h3>Iqbal Salam</h3>
  <p>Founder & Creative Director</p>
<div className="skill-tabs">
  <details name="profile-skills" className="skill-tab graphic-tab">
  <summary>🎨 GRAPHIC DESIGN</summary>
  <ul>
    <li>CorelDRAW</li>
    <li>Adobe Photoshop</li>
    <li>Adobe Illustrator</li>
    <li>Logo Design</li>
    <li>Branding & Corporate Identity</li>
    <li>Printing & Packaging Design</li>
  </ul>
</details>

  <details name="profile-skills" className="skill-tab ai-tab">
    <summary>🤖 AI MASTERY</summary>
    <p>ChatGPT, Gemini, AI Image Generation and AI-Based Creative Design.</p>
  </details>
</div>
</div>
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
            <p>Raincoat Design, Visualizer &amp; AI Designer.</p>
          </div>

          <div className="service-card">
            <span>🎁</span>
<h3>Gifting & Stationery</h3>
<p>Corporate gifting, office and school stationery with custom branding and printing.</p>
          </div>
        </div>
      </section>

     {/* Products */}
<section className="products" id="products">
  <p className="section-tag">OUR WORK</p>
  <h2>Products & Solutions</h2>
  <p>
    Creative graphic designs, professional printing, school bags,
    raincoats, corporate gifting, office and school stationery,
    and customised packaging.
  </p>

  <div className="product-grid">
    <div className="product-card">
      <h3>School Bags</h3>
      <p>School bags with customised designs and printing.</p>
    </div>

    <div className="product-card">
      <h3>Raincoats</h3>
      <p>Kids and adult rainwear with customised designs.</p>
    </div>

    <div className="product-card">
      <h3>Corporate Gifting</h3>
      <p>Customised gifts and promotional products.</p>
    </div>

    <div className="product-card">
      <h3>Office & School Stationery</h3>
      <p>Daily-use stationery and customised school products.</p>
    </div>

    <div className="product-card">
      <h3>Customised Packaging</h3>
      <p>Creative packaging design and printing solutions.</p>
    </div>

    <div className="product-card">
      <h3>Printing Products</h3>
      <p>Professional printing for business and personal needs.</p>
    </div>
  </div>
</section>

      {/* Contact */}
      <section className="contact" id="contact">
        <p className="section-tag">LET'S WORK TOGETHER</p>
        <h2>Have a Project in Mind?</h2>
        <p>Contact Danish Advertising for your next project.</p>
        <p><strong>Address:</strong> Zoya Apartment, Ground Floor, Opp. Royal Palace Hall, Pailipada, Trombay, Mumbai – 400088.</p>

<p><strong>WhatsApp:</strong> +91 9930202669</p>

<p><strong>Email:</strong> danishadvt@gmail.com</p>
        <a
          className="primary-btn"
          href="https://wa.me/919930202669"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
      </section>

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

 
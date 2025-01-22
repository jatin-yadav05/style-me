import React from 'react';
import './planning.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-text">STYLEME</span>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Generate</a>
          <a href="#">About</a>
          <a href="#">FAQ</a>
        </nav>
        <div className="auth-buttons">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </header>

      <section className="pricing-section">
        <h1 className="pricing-title">Plans and Pricing</h1>
        <p className="pricing-description">
          Receive unlimited credits when you pay yearly, and save on your plan.
        </p>

        <div className="billing-toggle">
          <button className="active">Monthly</button>
          <button>Annually</button>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card free-card">
            <h2>Free</h2>
            <p className="price">$0</p>
            <p className="billing">Per user/monthly, billed annually</p>
            <div className="card-content">
              <p>For your hobby</p>
              <ul>
                <li>Basic design tools</li>
                <li>Limited fabric and color options</li>
                <li>Standard customer support</li>
                <li>Access to community forums</li>
              </ul>
              <button className="get-started-button">Get Started for Free</button>
            </div>
          </div>

          <div className="pricing-card pro-card">
            <h2>Pro</h2>
            <p className="price">$29</p>
            <p className="billing">Per user/monthly, billed annually</p>
            <div className="card-content">
              <p>For small businesses</p>
              <ul>
                <li>Advanced design tools</li>
                <li>Unlimited fabric and color options</li>
                <li>Priority customer support</li>
                <li>Access to exclusive design templates</li>
                <li>High-resolution 2D previews</li>
                <li>Feedback and adjustment tools</li>
              </ul>
              <button className="upgrade-button">Upgrade to Pro</button>
            </div>
          </div>

          <div className="pricing-card enterprise-card">
            <h2>Enterprise</h2>
            <p className="price">Custom</p>
            <p className="billing">Per user/monthly billed annually</p>
            <div className="card-content">
              <p>For multiple teams</p>
              <ul>
                <li>All Pro features</li>
                <li>Custom branding options</li>
                <li>Dedicated account manager</li>
                <li>Enterprise-level support</li>
                <li>Custom integrations</li>
                <li>Bulk design options</li>
              </ul>
              <button className="start-enterprise-button">Start with Enterprise</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="footer-logo-text">STYLEME</span>
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h3>About Us</h3>
              <a href="#">Mission</a>
              <a href="#">Team</a>
              <a href="#">Newsletter</a>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#">Design</a>
              <a href="#">FAQ</a>
              <a href="#">Pricing</a>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <p>support@gmail.com</p>
              <p>+1(123) 456-7890</p>
              <p>123 Fashion Ave, Style City</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 StyleMe</p>
          <p>Terms of Service</p>
          <p>Back to Top</p>
        </div>
      </footer>
    </div>
  );
};

export default App;



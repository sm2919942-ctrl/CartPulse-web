import { Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>CartPulse</h2>

          <p>
            Discover premium products crafted
            for modern lifestyles.
          </p>

          <div className="social-icons">
            <span>IG</span>
            <span>IN</span>
            <span>X</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>SHOP</h4>
          <p>Electronics</p>
          <p>Fashion</p>
          <p>Accessories</p>
          <p>Home & Living</p>
        </div>

        <div className="footer-column">
          <h4>SUPPORT</h4>
          <p>Help Center</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>Order Status</p>
        </div>

        <div className="footer-column">
          <h4>CONTACT</h4>

          <p>
            <Mail size={14} />
            support@cartpulse.com
          </p>

          <p>
            <Phone size={14} />
            +91 98765 43210
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2026 CartPulse. All rights reserved.
        </span>

        <span>
          Privacy Policy • Terms & Conditions
        </span>
      </div>

    </footer>
  );
}

export default Footer;
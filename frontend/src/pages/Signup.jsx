import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { signupUser } from "../api/authApi";

function Signup() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.mobile ||
      !form.email ||
      !form.password
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    if (form.password.length < 6) {
      setMessage(
        "Password must be at least 6 characters."
      );
      return;
    }
  try {

    const result =
      await signupUser(form);

    if (result.demoMode) {

      setMessage(
        "Account created successfully • Demo Mode"
      );

    } else {

      setMessage(
        "Account created successfully"
      );
    }

    setTimeout(() => {
      navigate("/login");
    }, 700);

  } catch (error) {

    setMessage(error.message);
  }
};


  return (
    <>
      <Header />

      <main className="auth-page">

        <div className="auth-container signup-container">

          <div className="auth-left">

            <p className="auth-tag">
              JOIN CARTPULSE
            </p>

            <h1>
              Create your
              <span> premium account.</span>
            </h1>

            <p>
              Join CartPulse and discover premium
              collections, personalized shopping and
              exclusive member benefits.
            </p>

            <div className="auth-points">
              <span>✓ Save Your Wishlist</span>
              <span>✓ Faster Checkout</span>
              <span>✓ Track Orders</span>
              <span>✓ Exclusive Deals</span>
            </div>

          </div>

          <form
            className="auth-card"
            onSubmit={handleSignup}
          >

            <p className="auth-small">
              CREATE ACCOUNT
            </p>

            <h2>Sign Up</h2>

            <div className="form-row">

              <div className="form-group">

                <label>Full Name</label>

                <div className="input-box">

                  <User size={17} />

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                  />

                </div>

              </div>

              <div className="form-group">

                <label>Mobile Number</label>

                <div className="input-box">

                  <Phone size={17} />

                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Mobile number"
                  />

                </div>

              </div>

            </div>

            <div className="form-group">

              <label>Email Address</label>

              <div className="input-box">

                <Mail size={17} />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

            </div>

            <div className="form-group">

              <label>Password</label>

              <div className="input-box">

                <Lock size={17} />

                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>

            {message && (
              <p className="auth-message">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="auth-submit"
            >
              Create Account
            </button>

            <p className="auth-bottom-text">

              Already have an account?

              <Link to="/login">
                Sign In
              </Link>

            </p>

          </form>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Signup;
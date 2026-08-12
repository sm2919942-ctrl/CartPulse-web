import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  Eye,
  EyeOff,
  Mail,
  Lock
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { loginUser } from "../api/authApi";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

const handleLogin = async (e) => {

  e.preventDefault();

  if (!email || !password) {

    setMessage(
      "Please enter email and password."
    );

    return;
  }

  try {

    const result =
      await loginUser(
        email,
        password
      );

    const loggedInUser = {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email,
      mobile: result.user.mobile
    };

    localStorage.setItem(
      "cartpulseUser",
      JSON.stringify(loggedInUser)
    );

    setMessage(
      result.demoMode
        ? "Login successful • Demo Mode"
        : "Login successful"
    );

    setTimeout(() => {
      navigate("/");
    }, 600);

  } catch (error) {

    setMessage(error.message);
  }
};
  return (
    <>
      <Header />

      <main className="auth-page">

        <div className="auth-container">

          <div className="auth-left">

            <p className="auth-tag">
              WELCOME BACK
            </p>

            <h1>
              Return to your
              <span> premium experience.</span>
            </h1>

            <p>
              Sign in to access your CartPulse
              account, saved products and orders.
            </p>

            <div className="auth-points">
              <span>✓ Secure Shopping</span>
              <span>✓ Order Tracking</span>
              <span>✓ Wishlist Access</span>
              <span>✓ Premium Offers</span>
            </div>

          </div>

          <form
            className="auth-card"
            onSubmit={handleLogin}
          >

            <p className="auth-small">
              ACCOUNT ACCESS
            </p>

            <h2>Sign In</h2>

            <div className="form-group">

              <label>Email Address</label>

              <div className="input-box">

                <Mail size={17} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="form-group">

              <label>Password</label>

              <div className="input-box">

                <Lock size={17} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
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
              Sign In
            </button>

            <div className="auth-divider">
              <span />
              <p>OR</p>
              <span />
            </div>

            <p className="auth-bottom-text">

              New to CartPulse?

              <Link to="/signup">
                Create Account
              </Link>

            </p>

          </form>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Login;
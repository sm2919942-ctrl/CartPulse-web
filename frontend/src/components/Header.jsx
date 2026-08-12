import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  LogOut,
  Heart,
  Package
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../context/CartContext";

function Header() {
  const navigate = useNavigate();

  const { cartCount } = useCart();

  const [showMenu, setShowMenu] = useState(false);

  const user =
    JSON.parse(localStorage.getItem("cartpulseUser"));

  const handleLogout = () => {
    localStorage.removeItem("cartpulseUser");

    setShowMenu(false);

    navigate("/");
    window.location.reload();
  };
  const [search, setSearch] = useState("");

const handleSearch = (e) => {
  e.preventDefault();

  if (!search.trim()) return;

  navigate(
    `/products?search=${encodeURIComponent(search.trim())}`
  );
};

  return (
    <header className="header">

      <div className="logo">
        <Link to="/">CartPulse</Link>
      </div>
<form
  className="search-box"
  onSubmit={handleSearch}
>
  <Search size={20} />

  <input
    type="text"
    placeholder="Search our premium collection..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</form>

      <div className="header-actions">

        {!user ? (

          <Link
            to="/login"
            className="login-btn"
          >
            <User size={19} />
            Login
          </Link>

        ) : (

          <div className="user-menu-wrapper">

            <button
              className="user-menu-button"
              onClick={() =>
                setShowMenu(!showMenu)
              }
            >

              <div className="user-avatar">
                {user.name
                  ?.charAt(0)
                  .toUpperCase()}
              </div>

              <span>
                {user.name?.split(" ")[0]}
              </span>

              <ChevronDown size={15} />

            </button>

            {showMenu && (

              <div className="user-dropdown">

                <div className="dropdown-user-info">

                  <div className="dropdown-avatar">
                    {user.name
                      ?.charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>
                    <strong>
                      {user.name}
                    </strong>

                    <span>
                      {user.email}
                    </span>
                  </div>

                </div>

                <div className="dropdown-divider" />

                <Link
                  to="/orders"
                  onClick={() =>
                    setShowMenu(false)
                  }
                >
                  <Package size={16} />
                  My Orders
                </Link>

                <Link
                  to="/wishlist"
                  onClick={() =>
                    setShowMenu(false)
                  }
                >
                  <Heart size={16} />
                  Wishlist
                </Link>

                <div className="dropdown-divider" />

                <button
                  className="logout-button"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  Logout
                </button>

              </div>
            )}

          </div>

        )}

        <Link
          to="/cart"
          className="cart-link"
        >
          <ShoppingCart size={21} />

          <span>Cart</span>

          <span className="cart-count">
            {cartCount}
          </span>
        </Link>

      </div>

    </header>
  );
}

export default Header;
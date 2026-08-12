function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="hero-small">MEGA SHOPPING DAYS</p>

        <h1>
          Shop Smart.
          <br />
          Shop with <span>CartPulse.</span>
        </h1>

        <p>
          Discover amazing products at unbeatable prices.
          Electronics, fashion, home essentials and much more.
        </p>

        <button>Shop Now</button>

      </div>

      <div className="hero-offer">
        <span>UP TO</span>
        <strong>60%</strong>
        <span>OFF</span>
      </div>
    </section>
  );
}

export default HeroBanner;
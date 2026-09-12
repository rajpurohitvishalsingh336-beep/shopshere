import { Link } from "react-router-dom";

function About() {
  return (
    <main className="page">

      <div className="container">

        <div className="about-hero">

          <span className="eyebrow">
            ABOUT SHOPSPHERE
          </span>

          <h1>
            Shopping made simple.
            <br />
            <span>Designed for everyone.</span>
          </h1>

          <p>
            ShopSphere is a modern static e-commerce
            website created to demonstrate a clean,
            responsive and user-friendly online
            shopping experience.
          </p>

        </div>

        <div className="about-grid">

          <div className="about-card">
            <div>🎯</div>

            <h3>
              Our Mission
            </h3>

            <p>
              To create a simple and enjoyable shopping
              experience where customers can discover
              products quickly.
            </p>
          </div>

          <div className="about-card">
            <div>⚡</div>

            <h3>
              Fast Experience
            </h3>

            <p>
              Built using React and Vite for a fast,
              modern and responsive user interface.
            </p>
          </div>

          <div className="about-card">
            <div>💎</div>

            <h3>
              Quality Design
            </h3>

            <p>
              Every page is designed with a focus on
              clarity, accessibility and modern UI.
            </p>
          </div>

        </div>

        <section className="tech-section">

          <span className="eyebrow">
            TECHNOLOGY
          </span>

          <h2>
            Built with modern web technologies
          </h2>

          <div className="tech-list">

            <span>React</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>CSS3</span>
            <span>React Router</span>
            <span>Responsive Design</span>

          </div>

        </section>

        <section className="about-cta">

          <h2>
            Ready to explore?
          </h2>

          <p>
            Discover our collection of products.
          </p>

          <Link
            to="/products"
            className="primary-button"
          >
            Browse Products →
          </Link>

        </section>

      </div>

    </main>
  );
}

export default About;
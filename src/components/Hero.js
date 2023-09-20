import '../css/Hero.css';
import cover from '../assets/cover.jpg';

function Hero() {
  return (
    <section id="hero" className="jmbt-home-section">
      <div className="jmbt-home-cover">
        <img src={cover} alt={`${cover}`} />
          <div className="jmbt-cover-text">
            <h1>Élevez la nature chez <br /> vous.</h1>
            <p>Découvrez notre sélection de plantes exotiques, d'intérieures et d'extérieures.</p>
            <button className="jmbt-btn jmbt-scroll-btn">Explorer notre collection</button>
          </div>
      </div>
    </section>
  );
}

export default Hero;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Feature.css';
import { faLeaf, faThumbsUp, faTruck, faUserMd } from '@fortawesome/free-solid-svg-icons';

function Feature() {
  return (
    <section id="feature" className="jmbt-feature-section">
      <div className="jmbt-feature">
        <i className="fas fa-truck">
          <FontAwesomeIcon icon={faTruck} />
        </i>
        <h2>Livraison Rapide</h2>
        <p>Recevez votre oasis verte en un temps record.</p>
      </div>
      <div className="jmbt-feature">
        <i className="fas fa-leaf">
          <FontAwesomeIcon icon={faLeaf} />
        </i>
        <h2>Plantes Saines</h2>
        <p>Des plantes soignées avec amour pour une croissance vigoureuse.</p>
      </div>
      <div className="jmbt-feature">
        <i className="fas fa-user-md">
          <FontAwesomeIcon icon={faUserMd} />
        </i>
        <h2>Expertise en Soins</h2>
        <p>Des conseils d'experts pour maintenir votre jardin en pleine santé.</p>
      </div>
      <div className="jmbt-feature">
        <i className="fas fa-thumbs-up">
          <FontAwesomeIcon icon={faThumbsUp} />
        </i>
        <h2>Satisfaction Garantie</h2>
        <p>Votre satisfaction est notre priorité numéro un.</p>
      </div>
    </section>
  );
}

export default Feature;
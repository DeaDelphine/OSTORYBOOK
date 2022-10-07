// == Import
import './styles.scss';

import kappa from '../../assets/images/personnages-freebie-ac.jp/kappa.png';
import amefurikozo from '../../assets/images/personnages-freebie-ac.jp/amefurikozo.png';
import hitotsumekozo from '../../assets/images/personnages-freebie-ac.jp/hitotsume-kozo.png';
import aonyobo from '../../assets/images/personnages-freebie-ac.jp/aonyobo.png';
import oni from '../../assets/images/personnages-freebie-ac.jp/oni.png';
// == Component
function Credits() {
  return (
    <div className="container" >
      <div className="credits">
        <h2 className="credits credits-title">Les cerveaux du projet</h2>
        <div className="credits credits-container">
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={kappa} alt="Xavier" />
            <h3 className="credits credits-container--card-name">Nom Prénom</h3>
            <p className="credits credits-container--card-role">Rôle dans le projet</p>
            <div className="credits credits-container--card-link">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={oni} alt="Coralie" />
            <h3 className="credits credits-container--card-name">Nom Prénom</h3>
            <p className="credits credits-container--card-role">Rôle dans le projet</p>
            <div className="credits credits-container--card-link">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={hitotsumekozo} alt="Thomas" />
            <h3 className="credits credits-container--card-name">Nom Prénom</h3>
            <p className="credits credits-container--card-role">Rôle dans le projet</p>
            <div className="credits credits-container--card-link">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={aonyobo} alt="Delphine" />
            <h3 className="credits credits-container--card-name">Nom Prénom</h3>
            <p className="credits credits-container--card-role">Rôle dans le projet</p>
            <div className="credits credits-container--card-link">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={amefurikozo} alt="Camille" />
            <h3 className="credits credits-container--card-name">Nom Prénom</h3>
            <p className="credits credits-container--card-role">Rôle dans le projet</p>
            <div className="credits credits-container--card-link">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Credits;

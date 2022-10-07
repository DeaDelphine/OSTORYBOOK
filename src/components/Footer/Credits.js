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
            <img className="credits credits-container--card-img" src={hitotsumekozo} alt="Xavier" />
            <h3 className="credits credits-container--card-name">Prado Xavier</h3>
            <div className="credits credits-container--card-role" >
              <p>Product Owner</p>
              <p>Dev back</p>
            </div>
            <div className="credits credits-container--card-link">
              <a href="https://www.linkedin.com/in/xavier-prado/">LinkedIn</a>
              <a href="https://github.com/Xavier-Prado">GitHub</a>
            </div>
          </div>
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={kappa} alt="Coralie" />
            <h3 className="credits credits-container--card-name">Fleury Coralie</h3>
            <div className="credits credits-container--card-role" >
              <p>Scrum Master</p>
              <p>Dev Back</p>
            </div>
            <div className="credits credits-container--card-link">
              <a href="https://www.linkedin.com/in/fleury-coralie/">LinkedIn</a>
              <a href="https://github.com/CoralieFleury">GitHub</a>
            </div>
          </div>
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={oni} alt="Thomas" />
            <h3 className="credits credits-container--card-name">Chantreuil Thomas</h3>
            <div className="credits credits-container--card-role" >
              <p>Lead dev back</p>
            </div>
            <div className="credits credits-container--card-link">
              <a href="https://www.linkedin.com/in/chantreuil-thomas/">LinkedIn</a>
              <a href="https://github.com/ThomasChantreuil">GitHub</a>
            </div>
          </div>
          
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={amefurikozo} alt="Camille" />
            <h3 className="credits credits-container--card-name">Yamamoto Camille</h3>
            <div className="credits credits-container--card-role" >
              <p>Lead dev front</p>
            </div>
            <div className="credits credits-container--card-link">
              <a href="https://www.linkedin.com/in/camille-yamamoto-4528a6240/">LinkedIn</a>
              <a href="https://github.com/yamamotocamille">GitHub</a>
            </div>
          </div>
          <div className="credits credits-container--card">
            <img className="credits credits-container--card-img" src={aonyobo} alt="Delphine" />
            <h3 className="credits credits-container--card-name">De Alba Delphine</h3>
            <div className="credits credits-container--card-role" >
              <p>Référente technique Git</p>
              <p>Dev front</p>
            </div>
            <div className="credits credits-container--card-link">
              <a href="https://www.linkedin.com/in/delphine-de-alba/">LinkedIn</a>
              <a href="https://github.com/DeaDelphine">GitHub</a>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Credits;

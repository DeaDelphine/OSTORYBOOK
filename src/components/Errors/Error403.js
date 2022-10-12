// == Import
import { NavLink } from "react-router-dom";
import oni from "../../assets/images/personnages-freebie-ac.jp/oni2.png"

import './styles.scss';

// == Component
function Error403() {
  return (
    <div className="container-scrolly">
      <div className="error-403">
        <div className = "error-container">
            <h1 className = "error-container--title" > ERROR 403 </h1> 
            <div className = "error-container--content" >
              <div className = "error-container--content__container" >
                <img className = "error-container--content__image" src = {oni} alt = "img-403" />
                <div className = "error-container--choice" >
                  <p className = "error-container--choice__subtitle" > Que fais tu ici ? Tu t'es perdu ? Je te conseille vivement de partir de là rapidement avant que quelqu'un te trouve. Sinon, tu vas avoir des ennuis.</p> 
                      <NavLink
                        className = "error-container--choice__button" to = "/"
                      >
                        Fuir à toute jambes
                      </NavLink> 
                      <NavLink
                        className = "error-container--choice__button" to = "/histoires"
                      >
                        Oskour, aidez moi !
                      </NavLink> 
                  </div> 
              </div>
            </div> 
          </div>
      </div>
    </div>
  );
}

// == Export
export default Error403;

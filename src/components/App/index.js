// == Import
import { Routes, Route } from 'react-router-dom';

import NavBar from '../Navigation/NavBar';
import HeaderNavLinks from '../Navigation/HeaderNavLinks';
import Home from '../Home';
import Footer from '../Navigation/FooterNavigation';
import ConnectForm from '../ConnectForm';
import Profil from '../Profil';
import HistoryList from '../HistoryList';
import ContactForm from '../Footer/ContactForm';
import LegalMentions from '../Footer/LegalMentions';
import GameRules from '../Footer/GameRules';
import Credits from '../Footer/Credits';
import CGU from '../Footer/CGU';

import './styles.scss';
import FooterNavLinks from '../Navigation/FooterNavLinks';

// == Component
function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Routes>
          <Route 
            path="/"
            element={<Home />} 
          />
          <Route path="/connexion" element={<ConnectForm />} />
          <Route path="/mon-compte" element={<Profil />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/nous-contacter" element={<ContactForm />} />
          <Route path="/mention-legales" element={<LegalMentions />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/regles-du-jeu" element={<GameRules />} />
          <Route path="/histoires" element={<HistoryList />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

// == Export
export default App;

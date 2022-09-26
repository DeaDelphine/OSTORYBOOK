// == Import
import { Routes, Route } from 'react-router-dom';

import Header from '../Navigation/Header';
import ConnectForm from '../ConnectForm';
import Profil from '../Profil';
import Home from '../Home';
import Footer from '../Navigation/Footer';
import HistoryList from '../HistoryList';
import ContactForm from '../Navigation/Footer/ContactForm';
import LegalMentions from '../Navigation/Footer/LegalMentions';
import GameRules from '../Navigation/Footer/GameRules';
import Credits from '../Navigation/Footer/Credits';
import './styles.scss';
import MobileNavigation from '../Navigation/MobileNavigation';
import CGU from '../Navigation/Footer/CGU';

// == Component
function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<ConnectForm />} />
        <Route path="/mon-compte" element={<Profil />} />
        <Route path="/menu-mobile" element={<MobileNavigation />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/nous-contacter" element={<ContactForm />} />
        <Route path="/mention-legales" element={<LegalMentions />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/regles-du-jeu" element={<GameRules />} />
        <Route path="/histoires" element={<HistoryList />} />
      </Routes>

    </div>
  );
}

// == Export
export default App;

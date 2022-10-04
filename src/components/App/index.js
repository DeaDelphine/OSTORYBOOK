// == Import

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import NavBar from '../Navigation/NavBar';
import Home from '../Home';
import Footer from '../Navigation/FooterNavigation';
import Login from '../Login';
import Profil from '../Profil';

import StoryList from '../StoryList';
import ContactForm from '../Footer/ContactForm';
import LegalMentions from '../Footer/LegalMentions';
import GameRules from '../Footer/GameRules';
import Credits from '../Footer/Credits';
import CGU from '../Footer/CGU';

import Loading from './Loading';

import './styles.scss';

import { fetchStories } from '../../actions/stories';

// == Component
function App() {
  const dispatch = useDispatch();
  const storiesLoaded = useSelector((state) => state.stories.storiesLoaded);

  useEffect(() => {
    dispatch(fetchStories());
  }, []);
  if (!storiesLoaded) {
    return <Loading />;
  }

  return (
    <div className="app">
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/connexion" element={<Login />} />
          <Route path="/mon-compte" element={<Profil />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/nous-contacter" element={<ContactForm />} />
          <Route path="/mention-legales" element={<LegalMentions />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/regles-du-jeu" element={<GameRules />} />
          <Route path="/histoires" element={<StoryList />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

// == Export
export default App;

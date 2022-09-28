// == Import

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home';
import ConnectForm from '../ConnectForm';
import Profil from '../Profil';
import StoryList from '../StoryList';
import ContactForm from '../Navigation/Footer/ContactForm';
import LegalMentions from '../Navigation/Footer/LegalMentions';
import GameRules from '../Navigation/Footer/GameRules';
import Credits from '../Navigation/Footer/Credits';
import CGU from '../Navigation/Footer/CGU';

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
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<ConnectForm />} />
        <Route path="/mon-compte" element={<Profil />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/nous-contacter" element={<ContactForm />} />
        <Route path="/mention-legales" element={<LegalMentions />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/regles-du-jeu" element={<GameRules />} />
        <Route path="/histoires" element={<StoryList />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;

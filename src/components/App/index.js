// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Pages from '../StoryList/Pages';
import Home from '../Home';
import Login from '../Login';
import Profil from '../Profil';
import ProfilEdit from '../ProfilEdit';
import StoryList from '../StoryList';
import ContactForm from '../Footer/Contact';
import Policies from '../Footer/Policies';
import GameRules from '../Footer/GameRules';
import Credits from '../Footer/Credits';
import CGU from '../Footer/CGU';
import Error404 from '../Errors/Error404';
import Loading from './Loading';

// == Styles
import './styles.scss';
// == Actions
import { fetchStories } from '../../actions/stories';

// == Component
function App() {
  // const storiesLoaded = useSelector((state) => state.stories.storiesLoaded);
  // if (!storiesLoaded) {
  //   return <Loading />;
  // }

  return (
    <div className="app">
      <Navigation />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/mon-compte" element={<Profil />} />
          <Route path="/mon-compte/edit" element={<ProfilEdit />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/nous-contacter" element={<ContactForm />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/regles-du-jeu" element={<GameRules />} />
          <Route path="/histoires" element={<StoryList />} />
          <Route path="/histoire" element={<Pages />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}
// == Export
export default App;

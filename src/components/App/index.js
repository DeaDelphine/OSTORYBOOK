// == Import
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../Navigation/NavBar';
import Pages from '../StoryList/Pages';
import Home from '../Home';
import Footer from '../Navigation/FooterNavigation';
import Login from '../Login';
import Profil from '../Profil';
import EditProfil from '../EditProfil';
import StoryList from '../StoryList';
import ContactForm from '../Footer/Contact';
import LegalMentions from '../Footer/LegalMentions';
import GameRules from '../Footer/GameRules';
import Credits from '../Footer/Credits';
import CGU from '../Footer/CGU';
import Loading from './Loading';

// == Styles
import './styles.scss';

import { changeUserInput } from '../../actions/user';

// == Actions

// == Component
function App() {
  // const storiesLoaded = useSelector((state) => state.stories.storiesLoaded);
  // if (!storiesLoaded) {
  //   return <Loading />;
  // }
  const dispatch = useDispatch();
  return (
    <div className="app">
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/mon-compte" element={<Profil />} />
          <Route
            path="/mon-compte/edit"
            element={(
              <EditProfil
                changeField={(newValue, identifier) => {
                  dispatch(changeUserInput(newValue, identifier));
                }}
              />
)}
          />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/nous-contacter" element={<ContactForm />} />
          <Route path="/mention-legales" element={<LegalMentions />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/regles-du-jeu" element={<GameRules />} />
          <Route path="/histoires" element={<StoryList />} />
          <Route path="/histoire" element={<Pages />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
// == Export
export default App;

// == Import
import Navbar from '../Navbar';
import Home from '../Home';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

// == Export
export default App;

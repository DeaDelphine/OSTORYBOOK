// == Import
import Navbar from '../Navbar';
import Home from '../Home';
import Footer from '../Footer';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

// == Export
export default App;

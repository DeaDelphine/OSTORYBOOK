// == Import
import Navbar from 'src/components/Navbar';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
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

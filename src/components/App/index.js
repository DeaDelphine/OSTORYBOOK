// == Import
import Header from '../Navigation/Header';
import Home from '../Home';
import Footer from '../Navigation/Footer';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

// == Export
export default App;

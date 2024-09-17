import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import { Home } from './Components/Home';
import License from './Components/License';
import Supports from './Components/Supports';
import Work from './Components/Work';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Supports />
      <Footer />
      <License />
    </div>
  );
}

export default App;

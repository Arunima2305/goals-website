
import './App.css';
import Header from './components/header.js';
import Home from './components/Home.jsx';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/footer.js';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
</BrowserRouter>

  );
}

export default App;

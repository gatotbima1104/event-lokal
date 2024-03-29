import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './components/section1';
import Menu from './components/menu';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Footer from './components/footer';
import ReactGA from 'react-ga';

function App() {
  // initialize Google Analytics
  ReactGA.initialize('G-2R9R6C3KGR');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div>
      <Menu />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;

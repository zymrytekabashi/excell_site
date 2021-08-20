import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Container, } from 'semantic-ui-react';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';

const App = () => {
  const containerRef = useRef(+null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }
      watch={
        []
      }

      containerRef={containerRef}
    >
      <Container fluid data-scroll-container refs={containerRef}>
        <Router>
          <Navbar />
          <Route
            path="/"
            exact
            render={() =>
              <Homepage />}
          />
          <Route
            path="/about"
            exact
            render={() =>
              <About />}
          />
          <Route
            path="/contact"
            exact
            render={() =>
              <Contact />}
          />
        </Router>


        <Footer />
      </Container>
    </LocomotiveScrollProvider>
  );
}

export default App;

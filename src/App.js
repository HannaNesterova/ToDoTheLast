import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import Home from './components/Home/Home';



const App = () => {
  return (
    <main>
    <NavBar />
    <Container>
        <Home />
        <About />
        <Favorite />
    </Container>
  </main>
  );
};
export default App;

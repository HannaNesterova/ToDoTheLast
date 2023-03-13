import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import Home from './components/Home/Home';
//import { Routes } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';




const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
      <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/favorite" component={Favorite} />
          <Route path="*" component={NotFound} />
      </Switch>
      </Container>
  </main>
  );
};
export default App;

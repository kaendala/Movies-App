import './App.css';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Error from './views/error/error.view';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { routesSite } from './const/routes.const';

function App() {
  return (
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/error" render={() => <Error />} />
          {routesSite.map((route, index) => (
          <Route key={index} path={route.path} render={route.component} exact />
          ))}
        <Redirect to="/error" />
      </Switch>
      <Footer></Footer>
      </Router>
  );
}

export default App;

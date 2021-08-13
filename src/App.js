import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HeaderContainer } from './containers/header'
import { SocialsContainer } from './containers/socials'
import Work from './pages/work'
import Contact from './pages/contact'
import Home from './pages/home'

export default function App() {
  return (
    <>
      <Router>
        <HeaderContainer />
        <Switch>
          <Route path='/work'><Work /></Route>
          <Route path='/'><Contact /></Route>
        </Switch>
        <SocialsContainer />
      </Router>
    </>
  );
}

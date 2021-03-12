import { useAuth0 } from '@auth0/auth0-react';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchContextProvider from './context/SearchContext';
import Footer from './component/Footer';
import LandingPage from './component/LandingPage';
import FullNewsStory from './component/FullNewsStory';
import Demo from './component/Demo';
import Newnav from './component/Newnav';
 
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <SearchContextProvider>
      <Router>
        <Newnav />
          <Switch>
            <Route exact path="/HotOffThePress/">
              <Home />
            </Route>
            <Route path="/HotOffThePress/demo">
              <Demo />
            </Route>
            <Route path="/HotOffThePress/fullstory/:id">
              <FullNewsStory />
            </Route>
          </Switch>
        <Footer />         
      </Router>
    </SearchContextProvider>
  );
}

export default App;

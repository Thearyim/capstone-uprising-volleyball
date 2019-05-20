import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from './Header/HeaderContainer.js';
import HomeContainer from './Home/HomeContainer.js';
import TournamentContainer from './Tournaments/TournamentContainer.js';

const App = () => {

    return(
        <div>
          <HeaderContainer />
          <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route
                  path="/tournaments/adults"
                  render={(props) => (
                    <TournamentContainer ageGroup="adults" />
                  )}
                />
              <Route
                  path="/tournaments/juniors"
                  render={(props) => (
                    <TournamentContainer ageGroup="juniors" />
                  )}
                />
          </Switch>
        </div>
    );
}

export default App;

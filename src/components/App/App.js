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
                path="/tournaments"
                render={(props) => (
                  <TournamentContainer ageGroup="adults" />
                )}
              />
        </Switch>
      </div>
  );
}

export default App;

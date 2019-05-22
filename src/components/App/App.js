import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from './Header/HeaderContainer.js';
import HomeContainer from './Home/HomeContainer.js';
import TournamentContainer from './Tournaments/TournamentContainer.js';
import RegistrationContainer from './Registrations/RegistrationContainer.js';

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
            <Route
                path="/registrations"
                render={(props) => (
                  <RegistrationContainer ageGroup="adults" />
                )}
              />
        </Switch>
      </div>
  );
}

export default App;

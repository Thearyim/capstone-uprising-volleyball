import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from './Header/HeaderContainer.js';
import HomeContainer from './Home/HomeContainer.js';
import TournamentsContainer from './Tournaments/TournamentsContainer.js';

const App = () => {

    return(
        <div>
          <HeaderContainer />
          <Switch>
              <Route exact path='/' component={HomeContainer} />
              <Route path='/tournaments' component={TournamentsContainer} />
          </Switch>
        </div>
    );
}

export default App;

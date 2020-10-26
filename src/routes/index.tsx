import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import PointsMap from '../pages/PointsMap';
import NotFound from '../pages/NotFound';
import HistoryPage from '../pages/HistoryPage';
import EconomyPage from '../pages/EconomyPage';
import EnvironmentPage from '../pages/EnvironmentPage';
import RoutesPage from '../pages/RoutesPage';

const Router = () => {
    return(
        <BrowserRouter >
            <span id="page-top"/>
            <Switch>
                <Route path="/:lan/home" exact component={Home}/>
                <Route path="/:lan/history" exact component={HistoryPage}/>
                <Route path="/:lan/economy" exact component={EconomyPage}/>
                <Route path="/:lan/environment" exact component={EnvironmentPage}/>
                <Route path="/:lan/routes" exact component={RoutesPage}/>
                <Route path="/:lan/map" exact component={PointsMap}/>

                <Redirect path="/" exact to="/pt-br/home"/>
                <Redirect path="/:lan" exact to="/:lan/home"/>
                <Route path="/:lan/*" component={NotFound}/>
                
            </Switch>
 
            <Link to="#page-top" className="back-to-top"><i className="icofont-simple-up"></i></Link>
        </BrowserRouter>
    );
}

export default Router;
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from '../pages/Home';
import PointsMap from '../pages/PointsMap';
import NotFound from '../pages/NotFound';

const Router = () => {
    return(
        <BrowserRouter >
            <span id="page-top"/>
            <Switch>
                <Route path="/:lan/home" exact component={Home}/>
                <Route path="/:lan/map" exact component={PointsMap}/>
                <Route path="/*" component={NotFound}/>
            </Switch>
 
            <Link to="#page-top" className="back-to-top"><i className="icofont-simple-up"></i></Link>
        </BrowserRouter>
    );
}

export default Router;
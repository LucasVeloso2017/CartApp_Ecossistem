import React from 'react';
import { Switch ,Route } from 'react-router-dom'
import Cart from '../pages/Cart';
import Products from '../pages/Products';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/cart" component={Cart}/>
        </Switch>
    );
}

export default Routes;
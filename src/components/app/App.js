import React from 'react'
import { Switch, Route, HashRouter as BrowserRouter } from 'react-router-dom'
import browserHistory from '../../browser-history'

import Main from '../main/Main.jsx'
import { AppRoute } from '../../const'
import NotFound from '../not-found/NotFound'
import ProductCard from '../product-card/ProductCard'


export default function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main className="page page--gray page--index" />
        </Route>
        <Route exact path={AppRoute.PRODUCT}>
          <ProductCard  />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

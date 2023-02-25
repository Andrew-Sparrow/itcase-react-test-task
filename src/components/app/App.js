import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import browserHistory from '../../browser-history'

import './app.scss';
import Main from '../main/Main.jsx'
import { AppRoute } from '../../const'
import NotFound from '../not-found/NotFound'
import ProductCard from '../product-card/ProductCard';


export default function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.MAIN} element={<Main />} />
        <Route path={AppRoute.PRODUCT} element={<ProductCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

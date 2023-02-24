import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';


import rootReducer from './store/root-reducer';
import App from './components/app/App'
import './styles/index.css'
import { redirect } from './store/middlewares/redirect';
import { fetchProductsList } from './store/api-actions';


const rootView = document.getElementById('root')

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }).concat(redirect),
});

store.dispatch(fetchProductsList());


if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootView
  )
}

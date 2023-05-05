import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import {store} from './services/store';
import ErrorBoundry from './components/errorBoundry';

import './index.scss'

const restoService = new RestoService();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <Provider store={store}>
        <ErrorBoundry> 
          <RestoServiceContext.Provider value={restoService}>
            <Router>
              <App />
            </Router>
          </RestoServiceContext.Provider>
        </ErrorBoundry>
      </Provider>

);

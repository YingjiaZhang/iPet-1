/**
 * Created by ritter on 16-8-18.
 */
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import {render} from 'react-dom';

import App from './components/home/App';
import DoctorInfo from './container/Doctor';
import doctorList from './reducers';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import doctorsRequestMiddleware from './middlewares/doctorsRequestMiddleware';
import doctorRequestMiddleware from './middlewares/doctorRequestMiddleware';

const store = createStore(
    doctorList,
    applyMiddleware(doctorsRequestMiddleware, doctorRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>

      <Router history={browserHistory}>

        <Route path='/home' component={App}/>
        <Route path='/user_board' component={DoctorInfo}/>

      </Router>

    </Provider>,
    document.getElementById('app')
);

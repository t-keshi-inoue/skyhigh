import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,createFirestoreInstance,getFirestore} from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const middleware = [
  thunk.withExtraArgument({ getFirestore }),
];

const store= createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(fbConfig)
));

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();

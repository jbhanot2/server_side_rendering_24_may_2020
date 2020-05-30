
// third-party imports
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../redux/sagas';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import {reducer} from '../redux/reducer';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

export default store;
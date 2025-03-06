// sagas.js
import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_DATA, fetchDataSuccess, fetchDataError } from './actions'; // Define your action types and creators

function* fetchDataSaga(action) {
  try {
    // Make asynchronous API call
    const data = yield call(fetchData, action.payload);

    // Dispatch success action with data
    yield put(fetchDataSuccess(data));
  } catch (error) {
    // Dispatch error action
    yield put(fetchDataError(error));
  }
}

// Watch for FETCH_DATA action
function* rootSaga() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}

export default rootSaga;

import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
    let apiURL = 'https://gnews.io/api/v3/search?q=example&token=3cd0cf75836dcd8dee5c716347183dc8';
    if(!localStorage.getItem("data")) {
        const data = yield fetch(apiURL)
                            .then(res => res.json())
        yield put({type: 'NEWS_RECEIVED', json: data.articles})
        var dataToStore = JSON.stringify(data);
        localStorage.setItem("data", dataToStore)
    }
    else {
        const json = yield JSON.parse(localStorage.getItem("data"))
        yield put({type: 'NEWS_RECEIVED', json: json.articles})
    }
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
    let headers = {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': 'http://newsapi.org/', 
            'API-Key' : '3fbbff65e76a46259102b7dea8d80067', 
            'Access-Control-Expose-Headers': 'Content-Length,API-Key'
        }
    const json = yield fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=3fbbff65e76a46259102b7dea8d80067', {headers: headers} )
                    .then(res => res.json())
    yield put({type: 'NEWS_RECEIVED', json:json.articles})
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}
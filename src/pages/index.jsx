import React from 'react';
import { connect } from 'react-redux';
import {getNews} from '../components/redux/action';
import NewsItem from './listing';

// third-party imports
import Button from 'react-bootstrap/Button'

let App = ({getNews, loading}) => (
    <div>
        <Button variant="primary" size="lg" block onClick={getNews}>
            Press To see Latest News
        </Button>
        <div>
        {loading ? "loading...." : <NewsItem/> }
        </div>
    </div>
)

const mapDispatchToProps = {
    getNews: getNews
}

const mapStateToProps = (state) => ({
    article: state.news,
    loading: state.loading
})

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
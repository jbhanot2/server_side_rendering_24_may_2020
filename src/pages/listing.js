import React from 'react';
import { connect } from 'react-redux';
import {getNews} from '../components/redux/action';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let NewsItem = ({article, loading}) => (
    article ? 
        <Row className="row">
            {article.map((item,key) => (
                <Col xs={12} md={6} key={key}>
                    <h3>{item.title}</h3>
                    <img src={item.urlToImage} width="100%"/>
                    <h4>{item.description}</h4>
                    <a href={item.url} target="blank">Know more</a>
                </Col>
            ))}
        </Row> :
    null
)

const mapDispatchToProps = {
    getNews: getNews
}

const mapStateToProps = (state) => ({
    article: state.news,
    loading: state.loading
})

NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
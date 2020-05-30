import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Index from "../pages/index"
import store from '../components/redux/store';
import {Provider} from 'react-redux';
import App from '../pages/';

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(
    <Provider store={store}>
        <App/>
    </Provider>);
    res.status(200).render('pages/index', { reactApp: reactComp });
})
export default router;
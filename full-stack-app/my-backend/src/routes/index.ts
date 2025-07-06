import { Router } from 'express';
import IndexController from '../controllers';

const router = Router();
const indexController = new IndexController();

export const setRoutes = (app) => {
    app.use('/', router);
    router.get('/', indexController.handleHome);
    // Add more routes here as needed
};
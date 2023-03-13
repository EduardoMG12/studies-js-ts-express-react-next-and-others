import express from 'express'
import { homePageGet, homePageGetId, homePagePost } from './controller/homePage.js';
const routes = express.Router();

routes.get('/', homePageGet)
routes.post('/', homePagePost)
routes.get('/:userId?', homePageGetId)

export default routes;
import express from 'express'
import { contactPageGetId } from './src/controller/contactPage.js';
import { homePageGet, homePagePost } from './src/controller/homePage.js';
const routes = express.Router();

routes.get('/', homePageGet)
routes.post('/', homePagePost)
routes.get('/:userId?', contactPageGetId)

export default routes;
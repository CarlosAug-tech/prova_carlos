import { Router } from 'express';

import CidadeController from './app/controllers/CidadeController';
import ClienteController from './app/controllers/ClienteController';

const routes = new Router();

// Rotas da Cidade

routes.get('/cidades', CidadeController.index);
routes.post('/cidades', CidadeController.store);
routes.put('/cidades/:id', CidadeController.update);
routes.delete('/cidades/:id', CidadeController.delete);

// Rotas do Cliente

routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.store);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.delete);

export default routes;

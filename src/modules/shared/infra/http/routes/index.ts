import { Router } from 'express';
import { pokemonRoutes } from '../../../../pokemon/infra/http/routes';

const routes = Router();

routes.use('/pokemon', pokemonRoutes);

export { routes };

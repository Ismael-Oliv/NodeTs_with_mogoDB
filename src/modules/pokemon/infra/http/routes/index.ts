import { Router } from 'express';
import { CreatePokemonController } from '../controllers/CreatePokemonController';
import { CreateTypeController } from '../controllers/createTypeController';

const pokemonRoutes = Router();

const createPokemonController = new CreatePokemonController();
const createTypeController = new CreateTypeController();

pokemonRoutes.post('/create', createPokemonController.execute);
pokemonRoutes.post('/type/create', createTypeController.execute);

export { pokemonRoutes };

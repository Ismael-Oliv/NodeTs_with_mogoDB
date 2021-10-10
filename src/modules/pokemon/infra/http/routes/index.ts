import { Router } from 'express';
import { CreatePokemonController } from '../controllers/CreatePokemonController';
import { CreateTypeController } from '../controllers/createTypeController';
import { ListOnePokemonController } from '../controllers/ListOnePokemonController';

const pokemonRoutes = Router();

const createPokemonController = new CreatePokemonController();
const createTypeController = new CreateTypeController();
const listOnePokemonController = new ListOnePokemonController();

pokemonRoutes.post('/create', createPokemonController.execute);
pokemonRoutes.post('/type/create', createTypeController.execute);
pokemonRoutes.get('/listOne', listOnePokemonController.execute);

export { pokemonRoutes };

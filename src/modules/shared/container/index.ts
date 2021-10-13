import { container } from 'tsyringe';

import '../../pokemon/infra/providers';

import { IPokemonRepository } from '../../pokemon/repository/IPokemongRepository';
import { PokemonRepository } from '../../pokemon/infra/typegoose/repository/pokemonRepository';

import { TypeRepository } from '../../pokemon/infra/typegoose/repository/typeRepository';
import { ITypeRepository } from '../../pokemon/repository/ITypeRepository';

container.registerSingleton<IPokemonRepository>(
  'PokemonRepository',
  PokemonRepository
);

container.registerSingleton<ITypeRepository>('TypeRepository', TypeRepository);

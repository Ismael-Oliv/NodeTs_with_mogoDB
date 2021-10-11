# Node TS with MongoDB

Aplicação de cadastro de pokemons utilizando mongodb como base de dados, typescript com linguágem e typegoose como orm.

### Configurações

Será necessário configurar a conexão com o banco de dados através do arquivo _.env_, você pode verificar o arquivo _.env.example_ para entender como deve ser configurado.

### Execução

`git clone https://github.com/Ismael-Oliv/NodeTs_with_mogoDB`

`cd NodeTs_with_mongoDB`

`yarn` ou `npm run install`

`yarn dev` ou `npm run dev`

### Endpoints

- ##### Criar pokemon:

  rota: `/pokemon/create`

  metodo: `POST`

  local do envio: `body`

  tipo de dado:

   `{`

  `_id: string`

   `pokedex_index: number;`

   `name: string`

   `hp: number;`

   `attack: number;`

   `defense: number;`

   `special_attack: number;`

   `special_defense: number;`

   `speed: number;`

   `generation: number;`

   `image: string;` <!--Url da imagem-->

   `}`
  
  retorno: mesmo tipo do envio, mas acrecentando a propriedade `id`

---

- ##### Listar pokemon específico:

  rota:`/pokemon/listOne/id:`

  metodo: `GET`

  local do envio: `Query`

  retorno:

   `{`

   `id: string;`

   `pokedex_index: number;`

   `name: string`

   `hp: number;`

   `attack: number;`

   `defense: number;`

   `special_attack: number;`

   `special_defense: number;`

   `speed: number;`

   `generation: number;`

   `image: string;`

   `}`

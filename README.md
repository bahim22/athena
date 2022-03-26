
# Notes for Back-End Module/Microservice

___

## Back-End MongoDB Atlas Cloud Instance Template and Comparison

### Created to visualize and test modules I created using different methods

1. practice BE setup using different toolchains [x]
2. working with different DB and deploy methods [-]
3. make different client side adjustments [-]
4. further documentation, research, base coding [-]
5. Incorporate testing and debugging []
6. Analyze lighthouse scores []
7. Compare to Django & Django Rest Framework info [-]
8. Create template of most suitable option/s for future projects [-]

___

## server (index.js)

## database (config/db || connection)

1. MongoDB Atlas: DaaS Cloud Instance
2. PostgreSQL

## Dev Dep: dotenv, nodemon, cors

___

## Server

1. `Express` for handling API endpoint, deserializing data, storing in DB
   1. handler function
   2. POST

### ODM(ORM) (interact/access DB)

1. Object Relational/Document Mappers
   1. `Mongoose` || _MongoClient_ ['TS Todo', 'Gullo-db']
   2. `Prisma` | _Apollo_ ['Waves', 'nxt-ded-apql']
2. API data query/manipulation langauges
   1. `GraphQL` || _REST_ ['querying GitHub API via graphiql', 'VS Code Ext']

#### PRISMA ***

- schema
  - convert DB schema to prisma schema
- queries
  - generate prisma client to start db queries
  - introspection avail for PG

#### Apollo **

- Apollo Server
  - GQL server that can work w/ express
  - has UI explorer & playground
- Apollo Studio Explorer
  - run queries and explore schema
- Nexus
  - GQL schema generator
- typedefs, resolver functions, schemas, server

#### Mongoose *

- controllers
- models
- Routes

___

## Front-end & UI/UX

- `Axios` to make calls

___

## Testing

1. Jest
2. Enzyme
3. VS Code Debugging
   1. Chrome Dev Tools
   2. Edge Dev Tools

### Authentication, Authorization

### Productionn Build

- Using `Azure Cosmos DB` to deploy

### Serverless/Lambda Options

___

# ![The Engineering Sandbox Logo](./misc/assets/engineering-sandbox-logo.png)

A full-stack platform built to simulate a production application, allowing for the testing of Software Development tools and techniques for learning purposes.

## Architecture

The platform uses an N-tier architecture where the Back-End is built using microservices that sit behind an API Gateway.

### Front-End

The front-end is a React SPA Dashboard leveraging TypeScript and Tailwind, handling routing with Tanstack Router. API requests are made using GraphQL which are being made using Tanstack Query with graphql-codegen adding type-safetey to the GraphQL requests.

The components are built in the Atomic Design Architecture, leveraging ShadCN-UI to for a majority of components. These components are also documented with Storybook.

### Back-End

The Back-End currently consists of 5 pieces:

**API Gateway**: This is a Node.js / Express.js Server which leverages GraphQL, powered by Apollo Server, to communicate with the different microservices in the project.

**Monolithic API Server**: This is a Node.js / Express.js server that directly communicates with a PostgreSQL database using Prisma. This application will eventually be broken up into several microservices with their own databases.

**Monolithic Database**: This is a PostgreSQL database of an example e-commerce platform. This, along with the previous API server will be split with the various microservices.

**Redis Database**: Caching layer for the API Gateway. It also holds the state needed to manage rate limiting.

### Auth

Auth is currently handled by Auth0 where the user can sign in on the Front-End application and certain API Endpoints are only accessible with valid Access Tokens.

## Deployment

This application is deployed to various AWS services. GitHub Actions are used for CI / CD, with actions deploying each package independently whenever there's a change detected in the folder of a particular package.

**Note**: The Redis database is currently not implemented in production.

### Front-End Deployment

The React SPA is deployed on AWS using S3 and CloudFront.

### Back-End Deployment

API Servers are deployed on AWS Lambda.

### Database Deployment

The PostgreSQL database is currently hosted on Supabase.

## Set up

### Using Docker

Create a `.env` file in the root folder of the project with the following data:

```text
#Auth Config
AUTH0_URL=
AUTH0_CLIENT_ID=
AUTH0_AUDIENCE_URL=
AUTH0_SIGNING_ALG=
AUTH0_CALLBACK_URL=http://localhost:4000/

#REST API Config
REST_API_URL=http://rest-api:3001

#API Gateway Config
API_GATEWAY_URL=http://172.20.0.3:3000/graphql

#Redis Config
REDIS_PUBLIC_URL=redis:6379

#Prisma Config
DATABASE_URL=postgresql://postgres:postgres@db:5432/northwind
```

You'll also need to create a `.env.development` file in the `front-end/react-vite` folder with the following data:

```text
#Auth Config
VITE_AUTH0_URL=
VITE_AUTH0_CLIENT_ID=
VITE_AUTH0_AUDIENCE=
VITE_AUTH0_CALLBACK_URL=

#API Gateway Config
VITE_API_GATEWAY_URL=http://172.20.0.3:3000/graphql
```

After the `.env` is created, you can start the project with command:

```shell
docker compose --profile full up -d
```

This project is also has a dev container set up so that you can spin up a dev environment specifically to work on this project.

### Without Docker

If you want to avoid using Docker, the project's dependencies are:

- Node.js
- npm
- Serverless npm package
- PostgreSQL
- Redis

Currently there are three main packages which will require `.env` files. Along with that, PostgreSQL and Redis services will need to be set up and running to utilize the project.

## License

[MIT License](LICENSE)

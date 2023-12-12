import swaggerAutogen from "swagger-autogen";

const outputFile = "../../docs/swagger_output.json";
const endpointsFiles = ["../v1/routes/router.js"];

const doc = {
  info: {
    title: "REST API Example",
    description: "An example REST API that connects to a PostgreSQL Database."
  },
  host: "localhost:3001",
  basePath: "/v1"
};

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);

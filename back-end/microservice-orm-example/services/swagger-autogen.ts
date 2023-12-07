import swaggerAutogen from "swagger-autogen";

const outputFile = "../../docs/swagger_output.json";
const endpointsFiles = ["../v1/routes/router.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles);

import { app } from "../app";

const port = 3001;
const server = app.listen(port, () => {
  console.log(
    `Server is live here: http://localhost:${port} \nView API Endpoint documentation here: http://localhost:${port}/docs`
  );
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received.");
  server.close(() => {
    console.log("Closed out remaining connections");
    // Additional cleanup tasks go here
  });
});

import { app } from "../app";

const port = 3001;
app.listen(port, () => {
    console.log(`Server is live here: http://localhost:${port} \nView API Endpoint documentation here: http://localhost:${port}/docs`);
});
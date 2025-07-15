import express from "express";

import notesRoutes from "./routes/notesRoutes.js"

const app = express();
const PORT = 8000;


app.use(express.json());
app.use("/" , notesRoutes)


app.listen(PORT , () => {
    console.log(`Server is running on Port ${PORT}`);
})
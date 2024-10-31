import express, { Request, Response } from "express";
import path from "path";

import jobRoutes from "./jobs/routes";
import skillRoutes from "./skills/routes";
import languageRoutes from "./languages/routes";
import peopleRoutes from './people/routes';
import educationRoutes from "./education/routes";

const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
app.locals.url = 'http://' + HOST + ':' + PORT + '/';

const publicPath = path.join(__dirname, '..', 'public');
app.use("/public", express.static(publicPath));

app.use(express.json());

app.use("/", jobRoutes);
app.use("/", skillRoutes);
app.use("/", languageRoutes);
app.use("/", peopleRoutes);
app.use("/", educationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
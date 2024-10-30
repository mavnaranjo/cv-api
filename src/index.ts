import express, { Request, Response } from "express";
import path from "path";

import jobRoutes from "./jobs/routes";
import skillRoutes from "./skills/routes";
import languageRoutes from "./languages/routes";
import peopleRoutes from './people/routes';
import educationRoutes from "./education/routes";

const app = express();

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'public');

console.log('public path: ', publicPath);

app.use("/public", express.static(publicPath));

app.use(express.json());

app.use("/", jobRoutes);
app.use("/", skillRoutes);
app.use("/", languageRoutes);
app.use("/", peopleRoutes);
app.use("/", educationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
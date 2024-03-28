import express from "express";

import { login } from "../controllers/auth.js";
import { updateChannelData } from "../controllers/channel.js";

const routes = express.Router();
routes.post("/login", login);
routes.patch("/updateChannel/:id", updateChannelData);

export default routes;

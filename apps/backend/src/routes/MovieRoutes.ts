import { Router } from "express";
import { MovieController } from "../controller/MovieController";

const movieRouter = Router();
const movieController = new MovieController();

movieRouter.get("/", (req, res) => movieController.getAllMovies(req, res));
movieRouter.get("/:id", (req, res) => movieController.getMovieById(req, res));
movieRouter.post("/", (req, res) => movieController.createMovie(req, res));

export default movieRouter;

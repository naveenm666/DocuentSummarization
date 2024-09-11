import { Request, Response } from "express";
import { AppDataSource } from "../dataSource";
import { Movie } from "../entities/Movie";

const movieRepository = AppDataSource.getRepository(Movie);

export class MovieController {
  async getAllMovies(req: Request, res: Response) {
    try {
      const movies = await movieRepository.find();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: "Error fetching movies" });
    }
  }

  async getMovieById(req: Request, res: Response) {
    try {
      const movie = await movieRepository.findOneBy({ id: parseInt(req.params.id) });
      movie ? res.json(movie) : res.status(404).json({ message: "Movie not found" });
    } catch (error) {
      res.status(500).json({ error: "Error fetching movie" });
    }
  }

  async createMovie(req: Request, res: Response) {
    const { title, releaseDate, genre, description, poster } = req.body;
    try {
      const newMovie = movieRepository.create({ title, releaseDate, genre, description, poster });
      await movieRepository.save(newMovie);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ error: "Error creating movie" });
    }
  }
}

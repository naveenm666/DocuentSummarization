// app/page.tsx
import { getAllMovies } from '../lib/api'; // Adjust the path as needed
import { Movie } from '@/types/movie';
import Link from 'next/link';

const HomePage = async () => {
  let movies: Movie[] = [];

  try {
    movies = await getAllMovies();
  } catch (error) {
    console.error("Error fetching movies:", error);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movies List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`} passHref>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
              {movie.poster && (
                <img
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

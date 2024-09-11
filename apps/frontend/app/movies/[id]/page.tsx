// app/movies/[id]/page.tsx
import { getMovieById } from '@/lib/api'; // Adjust the path as needed
import { Movie } from '@/types/movie';

interface Props {
  movie: Movie;
}

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  let movie: Movie | null = null;

  try {
    movie = await getMovieById(parseInt(id));
  } catch (error) {
    console.error("Error fetching movie:", error);
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
      {movie.poster && (
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <p>{movie.description}</p>
      <p><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
    </div>
  );
};

export default MovieDetailPage;

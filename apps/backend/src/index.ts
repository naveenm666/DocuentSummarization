import express from 'express';
import { AppDataSource } from './dataSource';
import movieRouter from './routes/MovieRoutes'; // Ensure this path is correct
import fileRoutes from './routes/fileRoutes'
import cors from 'cors';

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Initialize Data Source and start server
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.use('/movies', movieRouter); // Mount the router
    app.use('/api', fileRoutes);

    app.listen(3001, () => console.log('Server running on port 3001'));
  })
  .catch((error) => console.error('Error during Data Source initialization:', error));

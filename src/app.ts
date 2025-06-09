import express from 'express';
import sequelize from './config/database';
import hotelRoutes from './routes/hotelRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware for json parsing
app.use(express.json());

// Routes
app.use('/hotels', hotelRoutes);
app.use('/auth', authRoutes);

// Health check route 
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Database connection and server start
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to the database');

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();

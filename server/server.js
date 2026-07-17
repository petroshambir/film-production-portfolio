import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './Database Connection/DB.js';
import projectRoutes from './Route/projectRoutes.js';
import authRoutes from './Route/authRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// ዳታቤዝ ኣራኽብ
connectDB();

app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
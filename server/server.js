import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './Database Connection/DB.js';
import projectRoutes from './Route/projectRoutes.js';
import authRoutes from './Route/authRoutes.js';


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// CORS configuration (ንኩሉ ሕቶታት ክፈቅድ)
app.use(cors({
    origin: '*', // ኣብ መወዳእታ ናብ ሊንክ ናይ ፍሮንት-ኢንድካ ክትቅይሮ ትኽእል
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ዳታቤዝ ኣራኽብ
connectDB();

app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
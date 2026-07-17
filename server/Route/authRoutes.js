import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js'; 

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

        // ፓስዎርድካ ብ hash ክትውድሮ ኣለካ።
        // ንህዝቢ ከይፍለጥ password እዩ።
        const isMatch = (password === admin.password); // እንተዘይተሓሽዩ (plain) ከምዚ ግበሮ
        
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1h' });
        res.json({ token, adminId: admin._id });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
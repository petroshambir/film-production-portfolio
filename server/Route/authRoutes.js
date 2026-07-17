import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js'; 

const router = express.Router();

// router.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         console.log("Login attempt for:", email); // ኣብ Render Logs ክርአ እዩ

//         const admin = await Admin.findOne({ email });
//         if (!admin) {
//             console.log("Admin not found for:", email);
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const isMatch = (password === admin.password);
//         if (!isMatch) {
//             console.log("Password mismatch for:", email);
//             return res.status(400).json({ message: 'Invalid password' });
//         }

//         const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1h' });
//         res.json({ token, adminId: admin._id });
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // 1. ኢሜይል ንምርካብ (trim() ንስፔስ ንምእላይ)
        const admin = await Admin.findOne({ email: email.trim().toLowerCase() });
        
        if (!admin) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // 2. ፓስዎርድ ንምጽራይ (ምኽንያቱ plain text ስለ ዝኾነ)
        // እንተ bcrypt ዘይትጥቀም እንተኾንካ፣ ቀጥታ ከምዚ ግበሮ፦
        if (password !== admin.password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // 3. ቶከን ምፍጣር
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1h' });
        res.json({ token, adminId: admin._id });
        
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
export default router;
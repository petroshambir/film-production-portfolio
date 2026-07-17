import express from 'express';
import Project from '../models/project.js'; // ኣብ ኣይነት ናይ ፕሮጀክት ሞዴል ኣሎ።

const router = express.Router();

// ኩሎም ፕሮጀክትታት ንምርኣይ
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
});

// ሓድሽ ፕሮጀክት ንምውሳኽ (Admin)
router.post('/add', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.json(newProject);
    } catch (err) {
        res.status(400).json({ message: 'Error saving project' });
    }
});
// ኣብ server/routes/projectRoutes.js
router.put('/projects/:id', async (req, res) => {
    try {
        const { names, date } = req.body;
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id, 
            { names, date }, 
            { new: true }
        );
        res.json(updatedProject);
    } catch (err) {
        res.status(500).json({ message: "Error updating" });
    }
});

export default router;
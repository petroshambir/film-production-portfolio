import express from 'express';
import Project from '../models/project.js'; // ኣብ ኣይነት ናይ ፕሮጀክት ሞዴል ኣሎ።

import { upload } from '../cloudinaryConfig.js'
const router = express.Router();


// router.post('/:id/upload', upload.array('images', 5), async (req, res) => {
//     try {
//         const project = await Project.findById(req.params.id);
//         if (!project) return res.status(404).json({ message: "Project not found" });

//         // Cloudinary ዝሃበና ሊንክታት
//         const imageUrls = req.files.map(file => file.path);

//         // ሊንክታት ጥራሕ ናብ DB ንወስኽ
//         project.images.push(...imageUrls);
        
//         await project.save();
//         res.json({ message: "Uploaded Successfully", images: project.images });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
// projectRoutes.js
router.post('/:id/upload', (req, res) => {
    // ሚድልዌር ኣብ ውሽጢ ክንጽውዖ መታን ጌጋታት ክንቆጻጸር ንኽእል
    upload.array('images', 5)(req, res, async (err) => {
        if (err) {
            console.error("Multer Error:", err);
            return res.status(500).json({ message: "File upload failed", error: err.message });
        }

        try {
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const project = await Project.findById(req.params.id);
            if (!project) return res.status(404).json({ message: "Project not found" });

            const imageUrls = req.files.map(file => file.path);
            project.images.push(...imageUrls);
            await project.save();
            
            res.json({ message: "Uploaded Successfully", images: project.images });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });
});
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



router.put('/:id', async (req, res) => {
    try {
        // names, date ከምኡውን images ኣብ body ክህሉ ኣለዎ
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, // ኩሉ ዝመጸ ዳታ ኣዘምኖ
            { new: true }
        );
        res.json(updatedProject);
    } catch (err) {
        res.status(500).json({ message: "Error updating" });
    }
});

router.delete('/:projectId/images/:imgIndex', async (req, res) => {
    const project = await Project.findById(req.params.projectId);
    project.images.splice(req.params.imgIndex, 1);
    await project.save();
    res.json(project);
});
export default router;
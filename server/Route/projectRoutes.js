import express from 'express';
import Project from '../models/project.js'; // ኣብ ኣይነት ናይ ፕሮጀክት ሞዴል ኣሎ።
import multer from 'multer';
const router = express.Router();

// ስእልታት ናብ ፎልደር ንምቕማጥ (ወይ cloud storage)
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

// ስእሊ ንምስጋር (Endpoint)
// router.post('/:id/upload', upload.array('images', 5), async (req, res) => {
//     try {
//         // req.files ኣብዚ ኣሎ። ኣብዚ ናብ Cloudinary ወይ ባዕልኻ ዝሰርሕ ሎጂክ ክትጽሕፍ ኣለካ
//         // ንጊዜው እዚ ስእልታት ኣብ DB ናይቲ ፕሮጀክት ክትጽሕፎ ኣለካ
//         const project = await Project.findById(req.params.id);
//         // እተን ስእልታት ናብ DB ትጽሕፈን (ለምሳሌ: project.images.push(...filenames))
//         await project.save();
//         res.json({ message: "Uploaded" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

router.post('/:id/upload', upload.array('images', 5), async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        // ፋይላት ናብ Base64 ንምቕያር (ወይ ናብ Cloudinary እንተ ኣለኻ ኣብዚ ትጽውዖ)
        const imageUrls = req.files.map(file => {
            return `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
        });

        // እቶም ሓደስቲ ስእልታት ናብቲ ዝነበረ array ምውሳኽ
        project.images.push(...imageUrls);
        
        await project.save();
        res.json({ message: "Uploaded Successfully", images: project.images });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
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



// projectRoutes.js
// እቲ URL '/:id' ጥራሕ ይኹን
router.put('/:id', async (req, res) => {
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
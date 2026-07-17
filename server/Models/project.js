import mongoose from 'mongoose'; // `require` ኣውጺኻ ብ `import` ተክኦ

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    category: String,
    mediaUrl: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Project', ProjectSchema);
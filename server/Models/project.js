// import mongoose from 'mongoose'; // `require` ኣውጺኻ ብ `import` ተክኦ

// const ProjectSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     category: String,
//     mediaUrl: String,
//     createdAt: { type: Date, default: Date.now }
// });
// const ProjectSchema = new mongoose.Schema({
//     title: String,
//     names: String,
//     date: String,
//     images: [String] // ስእልታት ኣብ Array ይቕመጡ
// });

// export default mongoose.model('project', ProjectSchema);


import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    names: { type: String },         // ለውጢ: ንስም ናይ ሰብ
    date: { type: String },          // ለውጢ: ንዕለት
    description: { type: String },   // ትሕዝቶ
    category: { type: String },      // ካታጎሪ
    images: { type: [String], default: [] }, // ስእልታት ኣብ Array ይቕመጡ
    createdAt: { type: Date, default: Date.now }
});

// "project" ዘይኮነስ "Project" ክትጥቀም ይምረጽ
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
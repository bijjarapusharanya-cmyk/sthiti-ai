const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🗄️ DATABASE SETUP
const db = new sqlite3.Database('./sthiti.db', (err) => {
    if (err) console.log('✅ Connected to sthiti.db');
});

db.run(`CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    score INTEGER,
    description TEXT,
    image TEXT,
    lat REAL,
    lng REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

app.use(express.json({ limit: '50mb' }));

// --- ROUTES ---

// 1. Login Page (Entry Point)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

// 2. Dashboard (The Map)
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// 3. Database Gallery View
app.get('/database', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'database.html'));
});

// 4. API: AI Analysis & SQLite Save
app.post('/analyze', async (req, res) => {
    try {
        const { image, lat, lng } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Identify if this street scene shows distress or neglect. Return ONLY JSON: { 'found': true, 'score': 8, 'description': '...' }";
        
        const result = await model.generateContent([
            prompt,
            { inlineData: { data: image.split(',')[1], mimeType: "image/jpeg" } }
        ]);

        const text = (await result.response).text().replace(/```json|```/g, "").trim();
        const aiData = JSON.parse(text);

        const sql = `INSERT INTO reports (score, description, image, lat, lng) VALUES (?, ?, ?, ?, ?)`;
        db.run(sql, [aiData.score, aiData.description, image, lat, lng], function(err) {
            res.json({ ...aiData, success: true, id: this.lastID });
        });
    } catch (error) {
        res.status(500).json({ error: "Processing failed" });
    }
});

// 5. API: Get all reports for the gallery
app.get('/api/reports', (req, res) => {
    db.all("SELECT * FROM reports ORDER BY timestamp DESC", [], (err, rows) => {
        res.json({ "data": rows });
    });
});
// Add this to your server/app.js
app.get('/ngo-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'ngo.html'));
});
app.use(express.static(path.join(__dirname, '..', 'public')));

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Sthiti AI Live: http://localhost:${PORT}`));
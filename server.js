const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const siswaRoutes = require('./routes/siswa_routes');
app.use('/api/siswa', siswaRoutes);

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, "frontend")));

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
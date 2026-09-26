const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const siswaRoutes = require('./routes/siswa_routes');
app.use('/api', siswaRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
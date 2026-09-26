const express = require('express')
const router = express.Router()
const db = require('../config/database')

// GET semua data siswa
router.get('/siswa', async (req, res) => {
    try {
        const [rows] = await db.promise().query('SELECT * FROM siswa')

        res.json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server'
        })
    }
})

module.exports = router
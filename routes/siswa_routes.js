const express = require('express')
const router = express.Router()
const db = require('../config/database')

// GET semua data siswa
router.get('/', async (req, res) => {
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

// GET data siswa berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const [rows] = await db.promise().query(
            'SELECT * FROM siswa WHERE id = ?',
            [id]
        )

        if (rows.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'Data siswa tidak ditemukan'
            })
        }

        res.json(rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const { nis, nama, kelas, jurusan, alamat } = req.body

        if (!nis || !nama || !kelas || !jurusan || !alamat) {
            return res.status(400).json({
                status: false,
                message: 'Semua data siswa wajib diisi'
            })
        }

        const sql = `
            INSERT INTO siswa (nis, nama, kelas, jurusan, alamat)
            VALUES (?, ?, ?, ?, ?)
        
        `

        const [result] = await db.promise().query(sql, [
            nis,
            nama,
            kelas,
            jurusan,
            alamat
        ])

        res.status(201).json({
            status: true,
            message: 'Data siswa berhasil ditambahkan',
            id: result.insertId
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server'
        })
    }
})

// PUT edit data siswa
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nis, nama, kelas, jurusan, alamat } = req.body

        if (!nis || !nama || !kelas || !jurusan || !alamat) {
            return res.status(400).json({
                status: false,
                message: 'Semua data siswa wajib diisi'
            })
        }

        const sql = `
            UPDATE siswa
            SET nis = ?, nama = ?, kelas = ?, jurusan = ?, alamat = ?
            WHERE id = ?
        `

        const [result] = await db.promise().query(sql, [
            nis,
            nama,
            kelas,
            jurusan,
            alamat,
            id
        ])

        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: false,
                message: 'Data siswa tidak ditemukan'
            })
        }

        res.json({
            status: true,
            message: 'Data siswa berhasil diperbarui'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server'
        })
    }
})

// DELETE hapus data siswa
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const [result] = await db.promise().query(
            'DELETE FROM siswa WHERE id = ?',
            [id]
        )

        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: false,
                message: 'Data siswa tidak ditemukan'
            })
        }

        res.json({
            status: true,
            message: 'Data siswa berhasil dihapus'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server'
        })
    }
})

module.exports = router
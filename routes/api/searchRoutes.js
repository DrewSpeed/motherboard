const db = require('../../config/connection.js');
const express = require('express');
const router = express.Router();


router.get('/location', (req, res) => {
    const sql = `SELECT * FROM Restaurant`
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        })
    })
});

module.exports = router;
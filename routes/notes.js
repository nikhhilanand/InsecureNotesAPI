const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:id', (req, res) => {
  const query = `SELECT * FROM notes WHERE id = ${req.params.id}`; // 🔥 SQL Injection
  db.query(query, (err, results) => {
    if (err) return res.status(500).send('Error');
    res.json(results);
  });
});

module.exports = router;

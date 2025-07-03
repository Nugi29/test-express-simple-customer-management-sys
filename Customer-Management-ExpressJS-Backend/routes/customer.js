const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all customers
router.get('/get-all', (req, res) => {
  db.query('SELECT * FROM customer', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// POST add customer
router.post('/add', (req, res) => {
  const { name, salary, address } = req.body;
  db.query('INSERT INTO customer (name, salary, address) VALUES (?, ?, ?)', 
    [name, salary, address], (err) => {
    if (err) throw err;
    res.json({ message: 'Customer added successfully' });
  });
});

// PUT update customer
router.put('/update-customer', (req, res) => {
  const { id, name, salary, address } = req.body;
  db.query('UPDATE customer SET name = ?, salary = ?, address = ? WHERE id = ?', 
    [name, salary, address, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Customer updated successfully' });
  });
});

// DELETE customer
router.delete('/delete/:id', (req, res) => {
  db.query('DELETE FROM customer WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Customer deleted successfully' });
  });
});

// GET customer by ID
router.get('/search-by-id/:id', (req, res) => {
  db.query('SELECT * FROM customer WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(results[0]);
  });
});

// GET customers by name (partial match)
router.get('/search-by-name/:name', (req, res) => {
  const searchName = `%${req.params.name}%`;
  db.query('SELECT * FROM customer WHERE name LIKE ?', [searchName], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET customers by salary range
router.get('/search-by-salary/:min/:max', (req, res) => {
  const { min, max } = req.params;
  db.query('SELECT * FROM customer WHERE salary BETWEEN ? AND ?', 
    [min, max], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;


// http://localhost:3000/customer/get-all


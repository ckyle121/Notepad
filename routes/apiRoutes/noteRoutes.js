const router = require('express').Router();
const notes = require('../../db/db.json');

// GET request for notes stored in json db
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST request for notes stored in json db 
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    
    notes.push(req.body)
    res.sendFile(__dirname, + '../../db/db.json'); 
    res.json(req.body);
});

module.exports = router; 
const router = require('express').Router();
const { getAndRenderNotes } = require('../../public/assets/js/index');
const { notes } = require('../../db/db.json');

// GET request for notes stored in json db
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST request for notes stored in json db 
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toStirng();

    const results = getAndRenderNotes(req.body, notes);
    res.json(results);
});

module.exports = router; 
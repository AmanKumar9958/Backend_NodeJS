const express = require('express');
const router = express.Router();

// for file upload..
const multer = require('multer');
const { storage } = require('../config/cloudniary')
const upload = multer({ storage });

router.get('/home', (req, res) => {
    res.render('home');
})

router.post('/upload-file', upload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');

    res.json({
        url: req.file.path,
        fileName: req.file.originalname
    });
});




module.exports = router;
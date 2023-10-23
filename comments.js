// Create web server

// Import express and create a router
const express = require('express');
const router = express.Router();

// Import the Comments model
const Comments = require('../models/comments');

// GET all comments
router.get('/', (req, res) => {
    Comments.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
});

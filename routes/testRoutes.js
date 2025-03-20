const express = require('express');
const router = express.Router();
const { createTest, getRandomQuestions, getAllTests} = require('../controllers/testController');

// Admin: Create/Update test and its categories with questions
router.post('/create', createTest);

// Student: Get 20 random questions from a specific category inside a test
router.get('/get-random/:testName/:categoryName', getRandomQuestions);
router.get("/all", getAllTests);
module.exports = router;

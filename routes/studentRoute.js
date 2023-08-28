const express = require('express')
const { getStudents, createStudent, deleteStudent, canSeeMe} = require('../controllers/studentController')
const Student = require('../models/studentModel')
const router = express.Router()

router.get('/canSeeMe', canSeeMe )
router.get('/', getStudents )
router.post('/', createStudent)
router.delete('/:id', deleteStudent)


module.exports = router
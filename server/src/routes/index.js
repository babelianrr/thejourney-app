const express = require('express')

const router = express.Router()

const { getUsers, getUser, updateUser, deleteUser, } = require('../controllers/user')

const { getJournals, getJournal, addJournal, editJournal, delJournal, getJournalx } = require('../controllers/journal')

const { getBookmarks, getBookmark, addBookmark, delBookmark } = require('../controllers/bookmark')

const { register, login, checkAuth } = require('../controllers/auth')

const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', auth, uploadFile("image"), updateUser)
router.delete('/user/:id', auth, deleteUser)

router.post('/register', register)
router.post('/login', login)
router.get('/check-auth', auth, checkAuth)

router.get('/journals', getJournals)
router.get('/journalx/:id', getJournalx)
router.get('/journal/:id', getJournal)
router.post('/journal', auth, uploadFile("image"), addJournal)
router.patch('/journal/:id', auth, uploadFile("image"), editJournal)
router.delete('/journal/:id', auth, delJournal)

router.get('/bookmarks', getBookmarks)
router.get('/bookmark/:id', getBookmark)
router.post('/bookmark/:id', auth, addBookmark)
router.delete('/bookmark/:id', auth, delBookmark)

module.exports = router
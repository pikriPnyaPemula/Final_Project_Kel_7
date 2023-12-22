const router = require('express').Router();
const {dashboard, kelolaKelas, deleteCourse, login, addCourse, addCategory} = require('../controllers/admin.controllers');
const {image} = require('../libs/multer');
const {restrict} = require('../middlewares/auth.middlewares');

router.get('/dashboard', dashboard);
router.get('/kelolakelas', kelolaKelas);
router.delete('/course/:id', deleteCourse);
router.post('/login', login);
router.post('/category', image.single('image'), addCategory);
router.post('/course', addCourse);

module.exports = router;
const router = require('express').Router();
const { getGames } = require('../controllers/gameController');

router.get('/games', getGames);

module.exports = router;

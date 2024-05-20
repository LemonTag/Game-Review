const { Game } = require('../models');

exports.getGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching games.' });
  }
};

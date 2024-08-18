const db = require('../models');
const Card = db.Card;

exports.createCard = async (req, res) => {
  const { title, description } = req.body;

  try {
    const card = await Card.create({
      title,
      description,
    });
    res.status(201).json(card);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'Card title must be unique' });
    } else {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
};

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const { Op } = require('sequelize'); // Import Op for Sequelize operators

exports.getCardByTitle = async (req, res) => {
  const { title } = req.body;

  try {
    const card = await Card.findAll({
      where: {
        title: {
          [Op.iLike]: `%${title}%` // Perform a "like" search
        }
      }
    });

    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};


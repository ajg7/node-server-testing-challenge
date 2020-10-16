const express = require("express");
const server = express();
const router = express.Router();
const Characters = require("./model-nintendo-characters") ;




router.get('/nintendo', (req, res) => {
  Characters.find()
  .then(characters => {
    res.json(characters);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get characters' });
  });
});


router.post('/nintendo', (req, res) => {
  const characterData = req.body;

  Characters.add(characterData)
  .then(character => {
    res.status(201).json(character);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new character' });
  });
});


router.delete('/nintendo/:id', (req, res) => {
  const { id } = req.params;

  Characters.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find character with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete character' });
  });
});

module.exports = router;
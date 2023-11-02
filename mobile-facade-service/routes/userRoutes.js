const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const userMapper = require('../mappers/userMap')

router.get('/', async (req, res) => {
  try {
    const user = await userService.getUserById(1);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/fullname', async (req, res) => {
    try {
      const user = await userService.getUserById(1);
      const fullName = {
        fullName: userMapper.getFullName(user)
      };
      res.json(fullName);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
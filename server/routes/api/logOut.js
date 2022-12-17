const express = require('express')
const route = express.Router()

route.post('/log-out', (req, res) => {
    // Destroy the user's session
    req.session.destroy((error) => {
      if (error) {
        console.error(error);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  });

module.exports = route
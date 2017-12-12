'use strict';
module.exports = function(app) {
  let controller = require('../controllers/manaYieldController');

  //Routes
  app.route('/calculate')
    .post(controller.calculate);
};

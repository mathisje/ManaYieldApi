'use strict';
module.exports = function(app) {
  var controller = require('../controllers/manaYieldController');

  //Routes
  app.route('/calculate')
    .post(controller.calculate);
}
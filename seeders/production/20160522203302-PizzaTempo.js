'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = new Date();
    return queryInterface.bulkInsert('shops', [{ 
      id: 1,
      name: "Пицца Темпо",
      site_url: "http://www.pizzatempo.by",
      logo_url: "http://www.pizzatempo.by/public/i/logo.png",
      description: "Основными принципами работы пиццерий «Пицца Темпо» являются высокое качество блюд, стильный и удобный интерьер, доступные цены.",
      delivery_price: null,
      min_order_price: 120000,
      min_free_delivery_price: null,
      delivery_time: "вс-чт — с 10 до 22 часов, пт-сб — до 2 ночи, завтраки: 10:00 - 12:00, обеденные комплексы: 12:00 - 16:00.",
      created_at: now,
      updated_at: now
    }]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.delete({id: 1}, 'shops');
  }
};

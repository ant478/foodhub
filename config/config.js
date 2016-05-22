var config = {
  host: 'localhost',
  dialect: 'mysql',
  serverPort: 80,
  port: 3306,
  database: 'foodhubdb',
  username: 'root',
  password: 'root',
  auth: {
    facebook: {
      id: 826978404068539,
      secret: 'e73ff5dcff143688a832b1f86f2c7c02',
      callback: 'http://foodhub.com/api/v1/login/facebook/return'
    },
    vkontakte: {
      id: 5474858,
      secret: 'H6dghO8C1bxMDuiGp6dn',
      callback: 'http://foodhub.com/api/v1/login/vkontakte/return'
    }
  }
};

module.exports = config;

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
      id: 1117458761660283,
      secret: '07e53b043f786817a49684046f496f63',
      callback: 'http://81.177.175.79/api/v1/login/facebook/return'
    },
    vkontakte: {
      id: 5474864,
      secret: 'w88jCTxgnf2RZEHEAxRl',
      callback: 'http://81.177.175.79/api/v1/login/vkontakte/return'
    }
  }
};

module.exports = config;

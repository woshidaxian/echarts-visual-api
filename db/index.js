/**
 * @description 创建Sequelize实例
 */
const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USERNAME, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
});

sequelize.authenticate().then((res) => {
  console.log(res,1)
}).catch((err) => {
  console.log(err,2)
})

module.exports = sequelize;
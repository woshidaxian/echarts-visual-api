let dbConfig = {}
process.env.NODE_ENV = process.argv[2] || 'pro'
if (process.env.NODE_ENV == 'dev') {
  // 需数据库配置服务启动的电脑公网IP可访问
  dbConfig = {
    HOST: 'localhost',
    PORT: '3306',
    USERNAME: 'root',
    PASSWORD: '123456',
    DATABASE: 'chart_visual',
    DIALECT: 'mysql'
  }
} else if (process.env.NODE_ENV == 'pro') {
  dbConfig = {
    HOST: 'localhost',
    PORT: '13857',
    USERNAME: 'root',
    PASSWORD: 'hwg@HWG666',
    DATABASE: 'personal',
    DIALECT: 'mysql'
  }
}
module.exports = dbConfig
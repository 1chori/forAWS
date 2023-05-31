const Sequelize = require("sequelize");
const config = require("../config");
const User = require('./users');
const Post = require('./posts');

const sequelize = new Sequelize(
    config.dev.database,  // 무조건 첫 번째로 작성
    config.dev.username,
    config.dev.password,
    config.dev // host, port, dialect 등 옵션
)

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Post = Post;
User.init(sequelize);
Post.init(sequelize);
User.associate(db);
Post.associate(db);

module.exports = db;
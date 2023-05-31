const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            msg: {
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: "Post",
            tableName: "posts",
            paranoid: false,
            charset: "utf8",
            collate: "utf8_general_ci"
        })
    }
    // Post-User 다대일 관계 설정
    // 게시물은 단일 사용자에게 속하지만 사용자는 여러 게시물을 가질 수 있다
    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    }
}

module.exports = Post;
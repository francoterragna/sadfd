module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        name: {
            allowNull: false,
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'category',
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    return Category;
} 
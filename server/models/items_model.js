module.exports = (sequelize, DataTypes) => {
    return sequelize.define('items', {
        name: {
            type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
        type: {
            type: DataTypes.ENUM("weapon", "adventure gear", "tools"),
            allowNull:false
        },
        cost: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
}

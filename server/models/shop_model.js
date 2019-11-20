module.exports = (sequelize, DataTypes) => {
    return sequelize.define('shop_items', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        item_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        }       
    }, {timestamps: false});
}
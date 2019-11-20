const Sequelize = require('sequelize');

// Create sequalizer instance
const sequelize = new Sequelize(
    'dndshopinterface',                 // Database
    'root',                             // Username
    'password',                         // Password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Import Models
const Item = sequelize.import(__dirname + '/items_model');
const InventoryItem = sequelize.import(__dirname + '/inventory_model');
const ShopItem = sequelize.import(__dirname + '/shop_model');

//Associations
ShopItem.belongsTo(Item, {foreignKey: 'item_id'});
Item.hasOne(ShopItem, {foreignKey: 'item_id'});
InventoryItem.belongsTo(Item, {foreignKey: 'item_id'});
Item.hasOne(InventoryItem, {foreignKey: 'item_id'});

//Possible Associations
// 1:1
// Item.belongsTo(Location);
// Location.hasOne(Item);

// 1:Many
// Item.belongsTo(Location);
// Location.hasMany(Item);

// Many:Many
// Item.belongsToMany(Location, {through: 'itemsLocations'});
// Location.belongsToMany(Item, {through: 'itemsLocations'});

// Sync models and add default data
sequelize.sync()
// {force: true} to overwrite each time

// .then(() => {
//     Location.create({ address: '123 Somewhere' });
//     Item.create({ name: 'test', locationId: 1 });
// });

// Export models
module.exports = {
    Item,
    InventoryItem,
    ShopItem
};

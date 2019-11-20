const express = require('express');
const cors = require('cors');
const itemRouter = require('./routers/itemRouter');
const inventoryRouter = require('./routers/inventoryRouter');
const shopRouter = require('./routers/shopRouter');
const app = express();

app.use(cors());   
app.use(express.json());

app.use('/item', itemRouter);
app.use('/inventory', inventoryRouter);
app.use('/shop', shopRouter);

app.use((err, req, res, next) => {
    res.status(500).send({
        error: "Something went wrong",
        message: err
    });
});

app.listen(8080, () => {
    console.log('Server running on port 8080.')
});

module.exports = app;
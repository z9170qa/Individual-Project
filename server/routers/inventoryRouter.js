const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/get/all', async (req, res) => {
    const result = await models.InventoryItem.findAll({
        include: [{
            model: models.Item
        }]
    });
    res.send(result);
});

router.get('/get/:index', async (req, res) => {
    const [first = null] = await models.InventoryItem.findAll({
        where: {
            id: req.params.index
        },
        include: [{
            model: models.Item
        }]
    });
    if (first) {
        res.send(first);
    } else {
        res.status(404).send({ message: 'Item not found for index ' + req.params.index });
    }
});

router.post('/post', async (req, res) => {
    await models.InventoryItem.create(req.body);
    res.send();
});

// router.post('/addToInv/:name', async (req, res) => {
//     const y = await models.InventoryItem.findOne({
//         include: [
//             {
//                 model: models.Item,
//                 where: {
//                     name: req.params.name
//                 }
//             }
//         ]
//     });
//     await y.create();
//     res.send(y);
// });

router.delete('/delete/:name', async (req, res) => {
    const x = await models.InventoryItem.findOne({
        include: [
            {
                model: models.Item,
                where: {
                    name: req.params.name
                }
            }
        ]
    });
    await x.destroy();
    res.send(x);
});

router.put('/update', async (req, res) => {
    models.InventoryItem.update(req.body, {
        where: { id: req.body.id }
    });
    res.send();
});

module.exports = router;

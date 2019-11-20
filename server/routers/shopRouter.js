const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/get/all', async (req, res) => {
    const result = await models.ShopItem.findAll({
        include: [{
            model: models.Item
        }]
    });
    res.send(result);
});

router.get('/get/:index', async (req, res) => {
    const [first = null] = await models.ShopItem.findAll({ 
        where: { 
            id: req.params.index },
        include: [{
            model: models.Item
        }]
    });
    if(first) {
        res.send(first);
    } else {
        res.status(404).send({message: 'Item not found for index ' + req.params.index});
    }
});

router.post('/post', async (req, res) => {
        await models.ShopItem.create(req.body);
        res.send();
});

// router.delete('/delete/:index', async (req, res) => {
//     models.ShopItem.destroy({
//         where: { id: req.params.index }, limit: 1
//     });
//     res.send();
// });

router.delete('/delete/:name', async (req, res) => {
    const x = await models.ShopItem.findOne({
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
    models.ShopItem.update(req.body, {
        where: { id: req.body.id }
    });
    res.send();
});

module.exports = router;

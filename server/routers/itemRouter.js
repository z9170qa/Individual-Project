const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/get/all', async (req, res) => {
    const result = await models.Item.findAll();
    res.send(result);
});

router.get('/get/:index', async (req, res) => {
    const first = await models.Item.findAll({ where: { name: req.params.index } });
    if (first) {
        res.send(first);
    } else {
        res.status(404).send({ message: 'Item not found for index ' + req.params.index });
    }
});

router.post('/post', async (req, res) => {
    // console.log(req.body);
    // console.log(req.body.type)
    const a = req.body.type

    if (["weapon", "adventure gear", "tools"].includes(a)) {
        await models.Item.create(req.body);
        res.send();
    } else {
        res.status(400).send({ message: 'Invalid type: cannot add item. valid item types are: [weapon, adventure gear, tools] '})
    }

});

router.delete('/delete/:name', async (req, res) => {
    models.Item.destroy({
        where: { name: req.params.name }, limit: 1
    });
    res.send();
});

router.put('/update/:name', async (req, res) => {
    models.Item.update(req.body, {
        where: { name: req.body.name }
    });
    res.send();
});

module.exports = router;

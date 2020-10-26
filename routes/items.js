const express = require('express');
const router = express.Router();
const Item = require('../models/Item');


//Gets all items back
router.get('/getAllItems', async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.json({ message: err});
    }
});

//Creates an Item
router.post('/createItem', async (req, res) => {
    const item = new Item({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        qty: req.body.qty
    });
    try{
        const savedItem = await item.save();
        res.json(savedItem); //TODO: put request status
    }
    catch (err) {
        res.json({ message: err}); //TODO: put request status
    }

});

//Gets specific item
router.get('/getSpecificItem/:itemId', async (req, res) => {
    try {
        const item = await Item.findById(req.params.itemId);
        res.json(item);//TODO: put request status
    } catch (error) {
        res.json({ message: err}); //TODO: put request status
    }
});

//Delete specific item
router.delete('/deleteItem/:itemId', async (req, res) => {
    try {
        const item = await Item.remove({_id: req.params.itemId });
        res.json(item); //TODO: put request status
    } catch (error) {
        res.json({ message: err}); //TODO: put request status
    }
});

//Update specific item
router.patch('/updateItem/:itemId', async (req, res) => {
    try {
        const item = await Item.update(
            {_id: req.params.itemId }, 
            {$set: {title: req.body.title}
        });
        res.json(item); //TODO: put request status
    } catch (error) {
        res.json({ message: err}); //TODO: put request status
    }
});

module.exports = router;
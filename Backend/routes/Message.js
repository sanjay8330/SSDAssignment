/*************************************************************
* Developer   :   Sanjay Sakthivel (IT19158228)
* Purpose     :   Message Routes
* CreatedDate :   02nd November 2022
*************************************************************/
const router = require('express').Router();

/*************************************************************
* Purpose     :   Imported the Message Model
*************************************************************/
const MessageModel = require('../models/MessageModel');

/*************************************************************
 * HTTP Method  :   POST
 * Purpose      :   Add new message to Database
 * API          :   http://localhost:3001/message/addMessage          
*************************************************************/
router.route('/addMessage').post(async (req, res) => {
    if (req.body) {
        const Message = new MessageModel(req.body);
        await Message.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Get all messages from Database
 * API          :   http://localhost:3001/message/getAllMessages         
*************************************************************/
router.route('/getAllMessages').get(async (req, res) => {
    await MessageModel.find({})
        .populate('user', 'username, userEmail, userRole')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve message by ID from Database
 * API          :   http://localhost:3001/message/getMessageById/<MSG-ID)         
*************************************************************/
router.route('/getMessageById/:id').get(async (req, res) => {
    if (req.params && req.params.id) {
        await MessageModel.findById(req.params.id)
            .populate('user', 'username, userEmail, userRole')
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve messages by user ID
 * API          :   http://localhost:3001/message/getMsgByUserId/<USER-ID>          
*************************************************************/
router.route('/getMsgByUserId/:userId').get(async (req, res) => {
    if (req.params && req.params.userId) {
        await MessageModel.find({ user: req.params.userId })
            .populate('user', 'username, userEmail, userRole')
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

module.exports = router;
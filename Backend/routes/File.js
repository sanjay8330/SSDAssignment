/*************************************************************
* Developer   :   Sanjay Sakthivel (IT19158228)
* Purpose     :   File Routes
* CreatedDate :   02nd November 2022
*************************************************************/
const router = require('express').Router();

/*************************************************************
* Purpose     :   Imported the File Model
*************************************************************/
const FileModel = require('../models/FileModel');

/*************************************************************
 * HTTP Method  :   POST
 * Purpose      :   Add new files to Database
 * API          :   http://localhost:3001/file/addFile          
*************************************************************/
router.route('/addFile').post(async (req, res) => {
    if (req.body) {
        const File = new FileModel(req.body);
        await File.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Get all files from Database
 * API          :   http://localhost:3001/file/getAllFiles         
*************************************************************/
router.route('/getAllFiles').get(async (req, res) => {
    await FileModel.find({})
        .populate('user', 'username, userEmail, userRole')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve files by ID from Database
 * API          :   http://localhost:3001/file/getFileById/<FILE-ID)        
*************************************************************/
router.route('/getFileById/:id').get(async (req, res) => {
    if (req.params && req.params.id) {
        await FileModel.findById(req.params.id)
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
 * API          :   http://localhost:3001/file/getFileByUserId/<USER-ID>          
*************************************************************/
router.route('/getFileByUserId/:userId').get(async (req, res) => {
    if (req.params && req.params.userId) {
        await FileModel.find({ user: req.params.userId })
            .populate('user', 'username, userEmail, userRole')
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

module.exports = router;
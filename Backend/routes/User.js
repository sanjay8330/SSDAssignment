/*************************************************************
* Developer   :   Sanjay Sakthivel (IT19158228)
* Purpose     :   User Routes
* CreatedDate :   02nd November 2022
*************************************************************/
const router = require('express').Router();


/*************************************************************
* Purpose     :   Imported the User Model
*************************************************************/
const UserModel = require('../models/User');

/*************************************************************
 * HTTP Method  :   POST
 * Purpose      :   Create a new User on Database
 * API          :   http://localhost:3001/user/addUser          
*************************************************************/
router.route('/addUser').post(async (req, res) => {
    if (req.body) {

        const User = new UserModel(req.body);
        await User.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve all users from database
 * API          :   http://localhost:3001/user/getAllUsers          
*************************************************************/
router.route('/getAllUsers').get(async (req, res) => {
    await UserModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve all workers from database
 * API          :   http://localhost:3001/user/getAllWorkers          
*************************************************************/
router.route('/getAllWorkers').get(async (req, res) => {
    await UserModel.find({ userRole: 'Worker' })
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve all managers from database
 * API          :   http://localhost:3001/user/getAllManagers          
*************************************************************/
router.route('/getAllManagers').get(async (req, res) => {
    await UserModel.find({ userRole: 'Manager' })
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve user by Id
 * API          :   http://localhost:3001/user/getUserById/<ID>          
*************************************************************/
router.route('/getUserById/:id').get(async (req, res) => {
    if (req.params && req.params.id) {
        await UserModel.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve user by email address
 * API          :   http://localhost:3001/user/getUserByEmailID/<EMAIL>          
*************************************************************/
router.route('/getUserByEmailID/:id').get(async (req, res) => {
    if (req.params && req.params.id) {
        await UserModel.find({ userEmail: req.params.id })
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/*************************************************************
 * HTTP Method  :   GET
 * Purpose      :   Retrieve user by email address for Login
 * API          :   http://localhost:3001/user/validateUser/<EMAIL>          
*************************************************************/
router.route('/validateUser/:emailID').get(async (req, res) => {
    if (req.params && req.params.emailID) {
        await UserModel.find({ userEmail: req.params.emailID })
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

/*************************************************************
 * HTTP Method  :   PUT
 * Purpose      :   Update user role
 * API          :   http://localhost:3001/user/updateUserRoler/<USER-ID>          
*************************************************************/
router.route("/updateUserRole/:id").put(async (req, res) => {
    const newUserRole = req.body.userRole;

    const Id = req.params.id;

    try {
        await UserModel.findById(Id, (err, updUserObject) => {
            updUserObject.userRole = newUserRole;

            updUserObject.save()
                .then(data => {
                    res.status(200).send({ data: data });
                }).catch(error => {
                    res.status(500).send({ error: error });
                })
        });
    } catch (err) {
        console.log('Error in Role Update!');
    }
});

router.route("/updateUserToken/:id").put(async (req, res) => {
    const newToken = req.body.newToken;

    const Id = req.params.id;

    try {
        await UserModel.findById(Id, (err, updUserObject) => {
            updUserObject.jwtToken = newToken;

            updUserObject.save()
                .then(data => {
                    res.status(200).send({ data: data });
                }).catch(error => {
                    res.status(500).send({ error: error });
                })
        });
    } catch (err) {
        console.log('Error in Token Update!');
    }
});

module.exports = router;
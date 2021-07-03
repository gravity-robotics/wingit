const bcrypt = require('bcrypt');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

router.post('/signup', async (req, res) => {
    // First Validate The Request
    
    const { error } = validate(req.body);
    if (error) {
        console.log(error.details[0].message);
        return res.status(400).send(error.details[0].message);
        
    }

    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('The user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User(_.pick(req.body, ['name', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
        res.header('x-auth-token', token).render("create");
    }
});

module.exports = router;
 

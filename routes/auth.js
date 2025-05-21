const express = require('express');
const router = express.Router();
const User = require("../models/User")
const bcrypt = require('bcrypt');
router.post('/auth/signup', async (req, res) => {
   
    try{
        const formData = req.body;
        const existingUser = await User.findOne({email: formData.email});
        if (existingUser){
            return res.status(401).json({Message: "User already exist"});
        }

        const hashedpassword = await bcrypt.hash(formData.password, 10);
        const newData = {...formData, password: hashedpassword};
        const savedData = new User(newData);
        await savedData.save();
        return res.status(201).json({message: "User registered successfully"});
    }catch (err) {
        console.log ("erro registering user: ", err);
         return res.status(501).json({message: "Internal server error"})
    }
    

});

module.express = router;
const express = require("express");
const router = express.Router();

const User = require("../models/users.model");

// This api is used to store user details in mongodb
router.post("/", async (req, res) => {    
    try {
        const user = await User.create(req.body); 
        return res.status(200).send(user);
    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

// This api is used to get all user details from mongodb
// router.get("/", async (req, res) => {    
//     try {
//         const users = await User.find().lean().exec();
//         return res.status(200).send(users);

//     } catch (e) {
//         return res.status(401).json({message: e.message, status: "Failed"});
//     }
// })

// This api is used to get particular user details by email id because which is unique, from mongodb
router.get("/:emailId", async (req, res) => {    
    try {
        let emailId = req.params.emailId;
        if(emailId != null || emailId == ""){
            const users = await User.findOne({email: emailId}).lean().exec();
            return res.status(200).send(users);
        }else{
            return res.status(404).json({message: "Email Id is required"})
        }     
    } catch (e) {
        return res.status(401).json({message: e.message, status: "Failed"});
    }
})

module.exports = router;


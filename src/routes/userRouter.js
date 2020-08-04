const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        //validation
        if (!username || !password) {
            return res
                .status(400)
                .json({ msg: "Not all fields have been entered" });
        }
        if (password.length < 8) {
            return res
                .status(400)
                .json({ msg: "Password has to be at least eight characters" });
        }
        const existingUser = await User.findOne({username: username})
        if (existingUser) {
            return res
            .status(400)
            .json({msg: "An account with this email already exists."}); 
        }
        if (!username) username = email;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            email,
            password: passwordHash,
            username
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({err});
    }
});

router.post("/login", asyn (req,res) =>{
    
})

module.exports = router;
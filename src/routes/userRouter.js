const router = require("express").Router();

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
        const existingUser = await User.find({username: username})
        if (existingUser) {
            return res
            .status(400)
            .json({msg: "An account with this email already exists."}); 
        }
        
    } catch (err) {
        res.status(500).json({ err });
    }
});

module.exports = router;
const router = require("express").Router();

router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res
                .status(400)
                .json({ msg: "Not all fields have been entered" });
        }
        if (password.length < 8) {
            return res
                .status(400)
                .json({ msg: "Password needs 8 characters" });
        //check if user has signed up before
        const existingUser = await userModel.find({email: email});
        if (existingUser) {
            return res
                .status(400)
                .json({ msg: "An account with this email already exists." });
        };
        }
    } catch (err) {
        res.status(500).json({ err });
    }
});

module.exports = router;
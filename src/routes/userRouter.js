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
        if (password.length < 5) {
            return res
                .status(400)
                .json({ msg: "Password has to be at least five characters" });
        }
    } catch (err) {
        res.status(500).json({ err });
    }
});

module.exports = router;
const { Router } = require("express");

const router = Router();

router.get("/get-products", async (req, res) => {
  try {
    res.status(200).json([1, 2, 3, 4, 5, 6]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;

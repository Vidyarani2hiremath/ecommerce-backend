const express = require ("express");
const {
    addTowishList,
    getWishList,
    removeWishListItem,
} = require ("../controllers/wishlistController");

const router = express.Router();

router.post("/",addTowishList);
router.get("/",getWishList);
router.delete("/:itemId", removedWishListItem);

module.exports = router;

const express = require("express");
const router = express.Router({mergeParams: true})
const wrapAsync = require("../utils/wrapAsync.js")
// const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")

const reviewController = require("../controllers/reviews.js")

// Post Review Route   
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
 
// Post delete Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview));

module.exports = router;
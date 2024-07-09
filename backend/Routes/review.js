import express from 'express'
import {getAllReviews, createReview} from '../Controllers/reviewController.js'
import {authenticate, restrict} from '../auth/verifyToken.js'

const router = express.Router({mergeParams:true}); // <---- (nested routing)
// /nursery/nurseryId/review ---> route to be reached  [NESTED Routing]

router.get("/",getAllReviews);
router.post("/",authenticate,restrict(['customer']),createReview);

export default router;
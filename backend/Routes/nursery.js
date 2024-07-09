import express from 'express'
import {updateNursery, deleteNursery, getAllNursery, getSingleNursery} from '../Controllers/nurseryControllers.js'
import {authenticate,restrict} from '../auth/verifyToken.js'
import reviewRouter from './review.js'

const router = express.Router(); 

// nested route
router.use("/:nurseryId/reviews",reviewRouter);

router.get("/:id",getSingleNursery); 
router.get("/",getAllNursery);
router.put("/:id",authenticate,restrict(['nursery']),updateNursery);
router.delete("/:id",authenticate,restrict(['nursery']),deleteNursery);

export default router;
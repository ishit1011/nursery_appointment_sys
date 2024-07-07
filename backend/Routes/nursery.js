import express from 'express'
import {updateNursery, deleteNursery, getAllNursery, getSingleNursery} from '../Controllers/nurseryControllers.js'

const router = express.Router();

router.get("/:id",getSingleNursery);
router.get("/",getAllNursery);
router.put("/:id",updateNursery);
router.delete("/:id",deleteNursery);

export default router;
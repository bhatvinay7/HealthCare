import express from 'express';
const router=express.Router();
import {gethomePagedetails,posthomePagedetails} from '../controler/homePage.controler.js';
import upload from '../upload/HomePage/HomePage.multer.js'
router.get('/homepage',gethomePagedetails);
router.post('/homepage',upload.single('image'),posthomePagedetails);
export default router;

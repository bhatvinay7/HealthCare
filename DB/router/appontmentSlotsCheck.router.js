import express from 'express'
const router=express.Router()
import { getSlots } from "../controler/appointmentSlots.controler.js"

router.get('/appointmentSlots',getSlots)
export default router
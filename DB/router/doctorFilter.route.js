import express from 'express'
const router=express.Router()
import {getAllCities,getAllSpeciality,getAllLanguage,getAllDoctor} from '../controler/doctorFilteredInfo.controler.js'

router.get("/Cities",getAllCities)
router.get("/speciality",getAllSpeciality)
router.get("/language",getAllLanguage)
router.get("/allDoctor",getAllDoctor)
//router.get('/filter',getFilterData)
export default router
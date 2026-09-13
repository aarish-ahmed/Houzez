
import express from 'express'
import upload from '../config/multer.js'
import createProperty from '../controllers/createProperty.js'
import getProperty from '../controllers/getProperty.js'
import getOneProperty from '../controllers/getOneProperty.js'

const propertyRouter=express.Router()

propertyRouter.post('/create',upload.array('images',5),createProperty)
propertyRouter.get('/all',getProperty)
propertyRouter.get('/:id',getOneProperty)
export default propertyRouter
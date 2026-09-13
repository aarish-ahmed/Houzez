import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import propertyRouter from './routes/propertyRoutes.js'
import blogRouter from './routes/blogRoutes.js'
const app=express()

app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use('/api/properties',propertyRouter)
app.use('/api/blog',blogRouter)


export default app
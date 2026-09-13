import upload from "../config/multer.js"
import  addBlog  from "../controllers/addBlog.js"
import express from 'express'
import getBlogBySlug from "../controllers/getBlogBySlug.js"
import getBlogs from "../controllers/getBlogs.js"

const blogRouter=express.Router()

blogRouter.post('/add',upload.single("coverImage"),addBlog)
blogRouter.get('/',getBlogs)
blogRouter.get('/:slug',getBlogBySlug)
export default blogRouter
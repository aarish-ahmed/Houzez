import dotenv from 'dotenv'
import app from './app.js'

import prisma from './lib/prisma.js'

dotenv.config()

const port = process.env.PORT

// 4. Connect to the database
await prisma.$connect()
console.log('sb db connected successfully')

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.route.js'
import productRoute from './routes/product.route.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/product',productRoute)

export default app
import express from 'express'
import {config} from './config/env.config'
import morgan from 'morgan'
import IndexRouter from './routers/index.router'
import UserRouter from './routers/user.router'

const app = express()

//Settings
app.set('PORT', config.PORT)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Routers
app.use('/api/index', IndexRouter)
app.use('/api/user', UserRouter)

export default app


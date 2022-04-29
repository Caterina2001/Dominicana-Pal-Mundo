import express from 'express'
import {config} from './config/env.config'
import morgan from 'morgan'
import CategoryRouter from './routers/category.router'
import EventRouter from './routers/event.router'
import HotelRouter from './routers/hotel.router'
import NewsRouter from './routers/news.router'
import ReservationRouter from './routers/reservation.router'
import TouristItineraryRouter from './routers/tourist-itinerary.router'
import TouristSpotRouter from './routers/tourist-spot.router'
import UserRouter from './routers/user.router'
import path from 'path'
import cors from 'cors'

const app = express()

//Settings
app.set('PORT', config.PORT)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//Routers
app.use('/api/category', CategoryRouter)
app.use('/api/event', EventRouter)
app.use('/api/hotel', HotelRouter)
app.use('/api/news', NewsRouter)
app.use('/api/reservation', ReservationRouter)
app.use('/api/touristItinerary', TouristItineraryRouter)
app.use('/api/touristSpot', TouristSpotRouter)
app.use('/api/user', UserRouter)


//Statics Files
app.use('/uploads', express.static(path.resolve('uploads')))

export default app


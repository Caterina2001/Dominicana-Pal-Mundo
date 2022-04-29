import BaseService from './base.service'
import {hotelModel} from '../model/hotel.model'

export default class HotelService extends BaseService{

    constructor(){
        super(hotelModel)
    }
}
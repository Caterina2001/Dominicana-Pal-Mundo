import BaseService from './base.service'
import {touristSpotModel} from '../model/tourist-spot.model'

export default class TouristSpotService extends BaseService{

    constructor(){
        super(touristSpotModel)
    }
}
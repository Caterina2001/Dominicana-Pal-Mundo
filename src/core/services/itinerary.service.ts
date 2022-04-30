import { BaseService } from '@/core/services/base.service'
import { ItineraryModel } from '@/core/models/itinerary.model'
import settings from '@/core/utils/settings.util'
import axios from 'axios'
import store from '@/store/index'

export default class ItineraryService extends BaseService<ItineraryModel>
{
    constructor() {
        super("touristItinerary")
    }

    async get() {
        const data = await axios.get("http://localhost:3000/api/touristItinerary/" + store.state.user._id, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": store.state.token

            }
        })
        return data.data
    }

    async postItinerary(model: ItineraryModel, category: string) {
        const data = await axios.post("http://localhost:3000/api/touristItinerary/"+category, model, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": store.state.token
            }
        })
        return data.data
    }

    public async put(id: string | number, data: ItineraryModel){
        const response = await axios.put("http://localhost:3000/api/touristItinerary/" + id, data, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } ,
    
   });
        return response.data;
    }
}
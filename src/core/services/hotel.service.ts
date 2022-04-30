import { BaseService } from '@/core/services/base.service'
import { HotelModel } from '@/core/models/hotel.model'
import settings from '@/core/utils/settings.util'
import axios from 'axios'
import store from '@/store/index'

export default class HotelService extends BaseService<HotelModel>
{
    constructor() {
        super("hotel")
    }

    async get() {
        const data = await axios.get("http://localhost:3000/api/hotel/", {
            headers: {
                "Content-Type": "application/json",
            }
        })
        return data.data
    }

    async post(model: HotelModel) {
        const data = await axios.post("http://localhost:3000/api/hotel/", model, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": store.state.token

            }
        })
        return data.data
    }

    public async put(id: string | number, data: HotelModel){
        const response = await axios.put("http://localhost:3000/api/hotel/" + id, data, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } ,
    
   });
        return response.data;
    }
}
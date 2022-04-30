import { BaseService } from '@/core/services/base.service'
import { PlaceModel } from '@/core/models/place.model'
import settings from '@/core/utils/settings.util'
import axios from 'axios'
import store from '@/store/index'

export default class PlaceService extends BaseService<PlaceModel>
{
    constructor() {
        super("touristSpot")
    }

    async get() {
        const data = await axios.get("http://localhost:3000/api/touristSpot/", {
            headers: {
                "Content-Type": "application/json",
            }
        })
        return data.data
    }

    async post(model: PlaceModel) {
        const data = await axios.post("http://localhost:3000/api/touristSpot", model, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": store.state.token

            }
        })
        return data.data
    }

    public async put(id: string | number, data: PlaceModel){
        const response = await axios.put("http://localhost:3000/api/touristSpot/" + id, data, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } ,
    
   });
        return response.data;
    }
}
import { BaseService } from '@/core/services/base.service'
import { ReservationModel } from '@/core/models/reservation.model'
import axios from 'axios'
import store from '@/store/index'

export default class ReservationService extends BaseService<ReservationModel>
{
    constructor() {
        super("reservation")
    }

    async get(user: string) {
        const data = await axios.get("http://localhost:3000/api/reservation/" + user, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": store.state.token
            }
        })
        return data.data
    }

    async post(model: ReservationModel) {
        const data = await axios.post("http://localhost:3000/api/reservation/", model, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": store.state.token

            }
        })
        return data.data
    }

    public async put(id: string | number, data: ReservationModel){
        const response = await axios.put("http://localhost:3000/api/hotel/" + id, data, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } ,
    
   });
        return response.data;
    }
}
import { BaseService } from '@/core/services/base.service'
import { SignInModel, SignUpModel } from '@/core/models/user.model'
import settings from '@/core/utils/settings.util'
import axios from 'axios'
import store from '@/store/index'

export default class UserService extends BaseService<SignUpModel>
{
    constructor() {
        super("user")
    }

    async signIn(model: SignInModel) {
        const data = await axios.post("http://localhost:3000/api/user/" + "signIn", model, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return data.data
    }

    async signUp(model: SignUpModel) {
        const data = await axios.post("http://localhost:3000/api/user/" + "signUp", model, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return data.data
    }

    public async put(id: string | number, data: SignUpModel){
        const response = await axios.put("http://localhost:3000/api/user/" + id, data, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } ,
    
   });
        return response.data;
    }
}
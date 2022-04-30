import { BaseService } from '@/core/services/base.service'
import { CategoryModel } from '@/core/models/category.model'
import settings from '@/core/utils/settings.util'
import axios from 'axios'
import store from '@/store/index'

export default class CategoryService extends BaseService<CategoryModel>
{
    constructor() {
        super("category")
    }

    async get() {
        const data = await axios.get("http://localhost:3000/api/category/", {
            headers: {
                "Content-Type": "application/json",
            }
        })
        return data.data
    }

    async post(model: CategoryModel) {
        const data = await axios.post("http://localhost:3000/api/category/", model, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": store.state.token

            }
        })
        return data.data
    }

    public async put(id: string | number, data: CategoryModel){
        const response = await axios.put("http://localhost:3000/api/category/" + id, data, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } ,
    
   });
        return response.data;
    }
}
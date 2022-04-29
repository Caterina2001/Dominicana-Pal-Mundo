import BaseService from './base.service'
import {categoryModel} from '../model/category.model'

export default class CategoryService extends BaseService{

    constructor(){
        super(categoryModel)
    }
}
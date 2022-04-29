import BaseService from './base.service'
import {newsModel} from '../model/news.model'

export default class NewsService extends BaseService{

    constructor(){
        super(newsModel)
    }
}
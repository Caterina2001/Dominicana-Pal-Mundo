import BaseService from './base.service'
import {testModel} from '../model/test.model'

export default class TestService extends BaseService{

    constructor(){
        super(testModel)
    }
}
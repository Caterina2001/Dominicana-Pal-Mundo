import axios, { AxiosResponse } from "axios";
import settings from "@/core/utils/settings.util";
import { IEntityOperationResult } from "../infrasc/abstract";
import store from "@/store";

export interface IBaseService<T>{
    getAll(): Promise<AxiosResponse<T>>;
    getById(id: string | number): Promise<AxiosResponse<T>>;
    delete(id: string | number): Promise<AxiosResponse<IEntityOperationResult<T>>>
    post(data: T): Promise<AxiosResponse<IEntityOperationResult<T>>>;
    put(id: string | number, data: T): Promise<AxiosResponse<IEntityOperationResult<T>>>
}
export class BaseService<T> implements IBaseService<T> {
    public apiUrl: string;
    public controller: string;
    
    constructor(controller: string) {
        this.controller = controller;
        this.apiUrl = settings.API_URL + "api/" + controller + "/";
    }

     async getAll() {
        const url = `${this.apiUrl}`;
        const response = await axios.get(url, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } });
        return response;
    }

    public async getById(id: string | number){
        const response = await axios.get<T>(this.apiUrl + id, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } });
        return response;
    }

    public async delete(id: string | number){
        const response = await axios.delete<IEntityOperationResult<T>>(this.apiUrl + id, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } });
        return response;
    }

    public async post(data: T) {
        const response = await axios.post<IEntityOperationResult<T>>(this.apiUrl, data, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } });
        return response;
    }

    public async put(id: string | number, data: T){
        const response = await axios.put<IEntityOperationResult<T>>(this.apiUrl + id, data, {headers: {
            "Content-Type": "application/json",
            "x-access-token": store.state.token
        } });
        return response;
    }
}
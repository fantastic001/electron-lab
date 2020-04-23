import { API_URL } from "./../../config";
import axios from "axios"

export default class CareService
{
    constructor(self) 
    {
        this.self = self;
    }

    static all() {
        return axios.get(API_URL + "/care/");
    }

    static list() 
    {
        return axios.get(API_URL + "/care/all/");
    }

    static listPredefinedCaresForClinic(id) 
    {
        return axios.get(API_URL + "/care/getPredefindedCaresForClinic/" + id);
    }

    static reservate(id)
    {
        return axios.post(API_URL + "/care/reservate/" + id);
    }

    static get(id) 
    {
        return axios.get(API_URL + "/care/" + id);
    }
    
    static update(id, data) 
    {
        return axios.post(API_URL + "/care/" + id, data);
    }

    static confirmation(id){

        return axios.post(API_URL + "/care/confirm/"+id);

    }

    static decline(id){

        return axios.post(API_URL + "/care/decline/"+id);

    }

    static scheduleForPatient(data, patientId) {
        return axios.post(API_URL + "/care/scheduleForPatient/" + patientId, data);
    }

}
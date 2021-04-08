import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicalService {

  constructor(private httpClient :HttpClient) { }

  getAllVehicals(){
    return this.httpClient.get("http://localhost:4000/vehicals");
  }


  getVehicalById(id: any){
    return this.httpClient.get("http://localhost:4000/vehicals/edit/"+id)
  }

  updateVehicalById(id:any,data:object){
    return this.httpClient.put("http://localhost:4000/vehicals/update/"+id,data);
  }

  addVehical(data:object){
    return this.httpClient.post("http://localhost:4000/vehicals/add",data);
  }


  deleteVehical(id:number){
    return this.httpClient.delete("http://localhost:4000/vehicals/delete/"+id);
  }



}

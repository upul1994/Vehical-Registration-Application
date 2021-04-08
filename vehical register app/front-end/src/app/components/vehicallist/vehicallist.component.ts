import { Component, OnInit } from '@angular/core';
import {VehicalService} from "../../vehical.service";

@Component({
  selector: 'app-vehicallist',
  templateUrl: './vehicallist.component.html',
  styleUrls: ['./vehicallist.component.css']
})
export class VehicallistComponent implements OnInit {

  constructor(private vehicalService :VehicalService) { }

  vehicalList:any;
  msg=false
  databaseId:any

  ngOnInit(): void {

    this.vehicalService.getAllVehicals().subscribe(result=>{
      this.vehicalList=result;
    })
  }


  deleteVehicalData(id:number){

    this.vehicalList.findIndex((result:any,i:number)=>{    // find index method
      if(result._id == id) {
        this.databaseId = i;
      }



    })

    this.vehicalList.splice(this.databaseId,1)       //splice method
    this.vehicalService.deleteVehical(id).subscribe(result=>{

      this.msg =true

    })


  }




}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VehicalService} from "../../vehical.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private vehicalService :VehicalService,private activatedRoute:ActivatedRoute) { }

  vehicalDetails:any
  id:any
  msg=false

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.id=param.get("id")
  })

    this.vehicalService.getVehicalById(this.id).subscribe(result=>{
      this.vehicalDetails =result
    })


}

  updateVehical() {
    this.vehicalService.updateVehicalById(this.id,this.vehicalDetails).subscribe(result=>{
      this.msg =true
    })
  }





}

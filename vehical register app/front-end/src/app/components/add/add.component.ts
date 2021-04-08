import { Component, OnInit } from '@angular/core';
import {VehicalService} from "../../vehical.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private vehicalService :VehicalService) { }


  msg =false;
  vehicalData:any
  imageSrc:any



  ngOnInit(): void {
  }


  addVehicalDetails(formData:NgForm){
    const vehicalData ={
      vehicalNo:formData.value.vehicalNo,
      category:formData.value.category,
      price:formData.value.price,
      image:this.imageSrc
    }


    this.vehicalService.addVehical(vehicalData).subscribe(result=>{
      this.msg =true;

    })


  }

  getImage(event:any){
    const fileReader = new FileReader()
    fileReader.readAsDataURL(event.target.files[0])

    fileReader.onload = (event:any)=>{
      this.imageSrc =event.target.result
    }

  }










}

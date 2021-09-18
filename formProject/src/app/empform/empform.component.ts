import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { freeApiService } from './services/freeapi.service';
import { code } from './code';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit
{
  users:Array<any>=new Array()
  title:string=" Employee Details";
  
  constructor(private _freeApiService:freeApiService){}
  empForm!:FormGroup;
  formval:Array<any>=new Array()
  ngOnInit(): void 
  {
      // this._freeApiService.getcodes()
      // .subscribe
      // (
      //   data=>{
      //     this.lstcomments=data;

      //   }

      // );
     
      
      this.empForm=new FormGroup
      ({
      name: new FormControl('',[ Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email]),
      address:new FormControl("",[Validators.required]),
      phone :new FormControl("", [Validators.required]),
      Pincode:new FormControl("", [Validators.required])
      })

  }


  lstcomments!:code[] 
  get fval() {
    
    return this.empForm.controls
    
    
    }


  //Compare Pin Codes
  // jsoncmp()
  // {
  //   var hasMatch =false;

  //   for (var index = 0; index <  this.lstcomments.length; ++index) {

  //   var animal =  this.lstcomments[index];
  //   var dat=this.empForm.controls.pincode.value;
  //   if(animal.pincode == dat)
  //   {
  //      hasMatch = true;
  //      break;
  //   }
  // }  
  // }
  onLoadDataClick():void
  {
    this.empForm.patchValue({
      name:'Deves Jha',
      email:'djha@gmail.com',
      address:'Satpur',
      phone:47978545,
     
    })
    
  }
  user!:any;
  code:Array<any>=new Array();
  onSubmit(){
    this.users.push(this.empForm.value)
   
   
    console.log(this.formval)
    
    if (this.empForm.invalid) {
    return ;
    }
   
    //console.log(this.empForm.controls.pincode.value)
    // //console.log(this.empForm.get('address').value)
  }

  validatePinCode()
  {
    let dat=this.empForm.controls.Pincode.value;
    console.log("Pincode",dat)
    if(dat.length===6){
      this._freeApiService.getcodes(dat).subscribe(message =>
      {
        this.code.push(message)
        console.log(message)
      })
    }
  }}

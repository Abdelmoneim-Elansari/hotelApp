import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators,FormArray } from "@angular/forms";
import { Ihotel } from "../shered/models/hotel";
import { HoteListService } from "../shered/services/hotel-list.service";

function ratingRangeValidators(min: number, max: number): ValidatorFn {
    return  (c: AbstractControl): {[key: string]: boolean } | null => {
        if (c.value != null && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'rangeError': true}
        }
        return null;
    };
}
@Component({
    selector: 'app-hotelEdit',
    templateUrl:'./hotel-edit.component.html',
    styleUrls: ['./hotel-edit.Component.css']
})

export class HotelEditComponent implements OnInit {

    public hotel: Ihotel | undefined 

    public errorMessage: boolean = false;

    public pageTitle:string ='';

    public button: string = 'Save';

    public tags : FormArray = new FormArray([]) 
    
    public hotelForm: FormGroup = new FormGroup({});
   
    constructor( private fb: FormBuilder){

    }
    
    ngOnInit(): void {
        this.hotelForm = this.fb.group({
            nom : ['',Validators.required,Validators.maxLength(20)],
            prix : ['',Validators.required],
            rating : [null, ratingRangeValidators(1,5)],
            description : ['',Validators.required],
            tags : this.fb.array ([])
        } )
    }

    saveHotel(){
        
    }

    deleteTag(index: number){

    }

    addTags(){

    }

    deleteHotel(){

    }

    hideError (){

    }


}



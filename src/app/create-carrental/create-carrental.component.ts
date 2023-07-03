import { Component,OnInit } from "@angular/core";
import { Carrental } from "../carrental";
import { CarrentalService } from "../carrental.service";
import { Router } from "@angular/router";

@Component({
  selector:'app-create-carrental',
  templateUrl: './create-carrental.component.html',
  styleUrls: ['./create-carrental.component.css']
})
export class CreateCarrentalComponent implements OnInit{

  carrental: Carrental =new Carrental();
  constructor(public carrentalService: CarrentalService,
    public router: Router){ }
    
    ngOnInit(): void {
      
    }
    saveCarrental(){
      this.carrentalService.createCarrental(this.carrental).subscribe(data=>{
        console.log(data);
        this.goToCarrentalList();

      },
      error=>console.log(error))
      
    }
    goToCarrentalList(){
      this.router.navigate(['/carrental']);

    }
    onSubmit(){
      console.log(this.carrental);
      this.saveCarrental();
    }

}
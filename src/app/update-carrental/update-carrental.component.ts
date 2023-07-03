import { Component, OnInit } from '@angular/core';
import { CarrentalService } from '../carrental.service';
import { Carrental } from '../carrental';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-carrental',
  templateUrl: './update-carrental.component.html',
  styleUrls: ['./update-carrental.component.css']
})
export class UpdateCarrentalComponent implements OnInit {
id!: number;
carrental: Carrental =new Carrental();
constructor(private carrentalService: CarrentalService,
  private route: ActivatedRoute,
  private router: Router) { }
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];

    this.carrentalService.updateCarrental(this.id,this.carrental).subscribe(data=>{
      this.goToCarrentalList();
      
    }
    ,error=>console.log(error));
  }
  onSubmit(){
    this.carrentalService.updateCarrental(this.id,this.carrental).subscribe(data=>{
      this.goToCarrentalList();
    }
    , error=>console.log(error));
  }
  goToCarrentalList(){
    this.router.navigate(['/carrental']);
  }
}

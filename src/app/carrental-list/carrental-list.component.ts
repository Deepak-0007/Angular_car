import { Component,OnInit } from '@angular/core';
import { Carrental } from '../carrental';
import { CarrentalService } from '../carrental.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrental-list',
  templateUrl: './carrental-list.component.html',
  styleUrls: ['./carrental-list.component.css']
})
export class CarrentalListComponent implements OnInit {
carrental!: Carrental[];
constructor(private carrentalService: CarrentalService,
  private router: Router) { }

ngOnInit(): void {
  this.getCarrental();
}

private getCarrental(){
  this.carrentalService.getCarrentalList().subscribe(data=>{
    this.carrental=data;
  });
}
carrentalDetails(id: number){
  this.router.navigate(['carrental-details',id]);
}
updateCarrental(id: number){
  this.router.navigate(['update-carrental',id]);
}
deleteCarrental(id: number){
  this.carrentalService.deleteCarrental(id).subscribe(data =>{
    console.log(data);
    this.getCarrental();
  })
}
}

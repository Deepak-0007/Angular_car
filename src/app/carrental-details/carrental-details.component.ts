import { Component, OnInit } from '@angular/core';
import { Carrental } from '../carrental';
import { ActivatedRoute } from '@angular/router';
import { CarrentalService } from '../carrental.service';
@Component({
  selector: 'app-carrental-details',
  templateUrl: './carrental-details.component.html',
  styleUrls: ['./carrental-details.component.css']
})
export class CarrentalDetailsComponent implements OnInit {
id!: number
carrental!: Carrental
constructor(private route: ActivatedRoute,private carrentalService: CarrentalService){ }
ngOnInit(): void {
  this.id-this.route.snapshot.params['id'];
  this.carrental=new Carrental();
  this.carrentalService.getEmployeeById(this.id).subscribe( data=>{
    this.carrental=data;
  });
}
}

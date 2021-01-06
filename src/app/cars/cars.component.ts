import { Component, OnInit } from '@angular/core';
import { Car } from './shared/car.model';
import { CarService } from './car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  selectedCar : Car;
 

  constructor(private carService: CarService) {

  	}

  
  onSelect(c: Car) {
  	this.selectedCar = c;
  }
  

  ngOnInit(): void {
    this.carService.GetAllCars().subscribe(cars => this.cars = cars)
  }

}

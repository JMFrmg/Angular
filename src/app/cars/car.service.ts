import { Injectable, Inject } from '@angular/core';
import { Car } from './shared/car.model';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { APPCONFIG } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars = [new Car(0, 'Renault', 'r5', 350, 1240, 40000, 4)];


  constructor(private http: HttpClient, @Inject(APPCONFIG.CARS_API_URL) private apiUrl:string) {
    this.cars.push(
    	new Car(1, 'Ford', 'Mustang', 350, 1240, 40000, 4),
    	new Car(2, 'Ferrari', 'F40', 480, 1380, 250000, 2),
    	new Car(3, 'Mini', 'Cooper S', 220, 1060, 30000, 4),
    	new Car(4, 'Porsche', 'Boxter S', 330, 1200, 65000, 2),
    	)	
    }

  GetAllCars() {
  	return this.http.get<Car[]>(`${this.apiUrl}/car`)
  };
  GetCar(id: number) {
  	console.log(id);
  	return this.http.get<Car[]>(`${this.apiUrl}/car/{id}`)
  };
  PostCar(car: Car) {};
  PutCar(car:Car) {};
  DeleteCar(car: Car) {};
}

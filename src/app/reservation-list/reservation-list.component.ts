import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
 

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];


 _filterText: string = '';
  filterByGender: Reservation[]=[];

  get filterText(){
    return this._filterText
  }
  

  set filterText(value: string){
    
     this.filterText= value;
     
  }


  constructor(private reservationService: ReservationService){}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
    
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id);
  }
}



  
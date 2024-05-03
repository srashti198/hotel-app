import { NumberValueAccessor } from "@angular/forms";

export interface Reservation {
  id:string,
  checkInDate:Date,
  checkOutDate:Date,
  guestName:string,
  guestEmail:string,
  roomNumber:number,
  Gender:string,


}

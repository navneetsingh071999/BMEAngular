import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookEvents } from '../Model/BookEvent';
import { EventRegistration } from '../Model/EventReg';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl : String = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  public getEvents (){
    return this.http.get(`${this.baseUrl}/event/show`);
  }

  public getUserRegisteredEvents(){
    return this.http.get(`${this.baseUrl}/event/approvedEvents`)
  }

  public getUserPendingEvents(){
    return this.http.get(`${this.baseUrl}/event/pendingEvents`)
  }

  public getUserBookedEvents(){
    return this.http.get(`${this.baseUrl}/event/bookedevents`)
  }

  public deleteBookedEvent(id : number){
    return this.http.delete(`${this.baseUrl}/event/deletebookedevent/${id}`);
  }

  public bookEvent(event : BookEvents, eventId : any){
    return this.http.post(`${this.baseUrl}/book/bookevent/${eventId}`, event);
  }

  public deleteRegisteredEvent(id : number){
    return this.http.delete(`${this.baseUrl}/event/delete/${id}`);
  }

  public updateUserRegisteredEvent(eventRegister : EventRegistration){
      return this.http.put(`${this.baseUrl}/event/update`, eventRegister);
  }

  public organizeEvent(event : EventRegistration){
    return this.http.post(`${this.baseUrl}/event/register`, event);
  }
}

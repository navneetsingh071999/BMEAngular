import { ApprovedEvent } from "./ApprovedEvent";
import { Employee } from "./EmployeeModel";

export class BookedEvents{
    id !: number;
    bookId !: ApprovedEvent;
    personName !: String;
    seats !: number;
    status !: boolean;
    eventName !: String;
    dateTime !: String;
    empId !: Employee;

}
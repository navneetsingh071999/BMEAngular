import { Employee } from "../Employee";

export class ApprovedEvent{
    id !: number;
    eventName !: String;
    eventId !: Employee;
    dateTime !: String;
    apporved !: Boolean;
    beveregesNeeded !: Boolean;
    capacity !: number;
    duaration !: String;
}
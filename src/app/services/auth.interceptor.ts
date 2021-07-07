import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService: LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = this.loginService.getToken();
        let newRequest = req;
        console.log("INTERCEPTOR: ",token)
        if(token != null){
            console.log("working");
            newRequest = newRequest.clone({
                setHeaders: {
                    Authorization: `BMEEMP ${token}`
                }
              });
        }
        
        return next.handle(newRequest);
        
    }
    
}
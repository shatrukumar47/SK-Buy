import {Injectable, inject} from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router} from "@angular/router";
import { AuthService } from "./service/auth.service";


@Injectable({
    providedIn: "root"
})

class AuthGuard{
  isAuth: boolean = false;
  constructor(private auth: AuthService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
      this.auth.isLoggedIn().subscribe((res)=> this.isAuth = res)
      if(this.isAuth){
          return true;
      }

      this.router.navigate(["/login"]);
      return false;
  }
}

export const authGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean =>{
  return inject(AuthGuard).canActivate(route, state);
}
